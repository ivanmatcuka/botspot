'use client';

import { Block, WPComponentNames } from '@/services';
import * as WPImports from '@botspot/ui';
import { ComponentProps, FC } from 'react';

import { NextButton } from './NextButton';

type WPComponents = Pick<
  typeof WPImports,
  | 'Banner'
  | 'Button'
  | 'MediaBlock'
  | 'MainBlock'
  | 'PageContainer'
  | 'Tile'
  | 'GalleryTile'
  | 'Iframe'
  | 'SkeletonVideo'
>;
type WPComponent = (typeof WPImports)[keyof WPComponents];
type ComponentMap = Record<WPComponentNames, WPComponent>;

const componentMap: Partial<ComponentMap> = {
  'ui/banner': WPImports.Banner,
  'ui/botspot-button': NextButton,
  'ui/gallery-tile': WPImports.GalleryTile,
  'ui/iframe': WPImports.Iframe,
  'ui/main-block': WPImports.MainBlock,
  'ui/media-block': WPImports.MediaBlock,
  'ui/page-container': WPImports.PageContainer,
  'ui/skeleton-video': WPImports.SkeletonVideo,
  'ui/tile': WPImports.Tile,
};

type WPBlocksProps = {
  blocks: Block[];
};

export const WPBlocks: FC<WPBlocksProps> = ({ blocks }) =>
  blocks.map((block, index) => {
    const Component = componentMap[block.blockName];

    if (!Component) return null;

    const props = block.attrs as ComponentProps<typeof Component>;

    const hasChildren =
      Array.isArray(block.innerBlocks) && block.innerBlocks.length > 0;

    return (
      // eslint-disable-next-line
      // @ts-ignore
      <Component key={index} {...props}>
        {hasChildren && <WPBlocks blocks={block.innerBlocks} />}
      </Component>
    );
  });
