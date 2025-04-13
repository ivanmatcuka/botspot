import { Block, WPComponentNames } from '@/services';
import * as WPImports from '@botspot/ui';
import { ComponentProps, FC } from 'react';

import { Jobs } from './Jobs';
import LandingPageProducts from './LandingPageProducts';
import { NextButton } from './NextButton';
import { People } from './People';
import { Posts } from './Posts';

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
  | 'Gallery'
  | 'PartnerLogo'
  | 'PartnerLogoContainer'
>;
type WPComponent = (typeof WPImports)[keyof WPComponents];
type ComponentMap = Record<WPComponentNames, WPComponent>;

const componentMap: Partial<ComponentMap> = {
  'ui/banner': WPImports.Banner,
  'ui/button': NextButton,
  'ui/gallery': WPImports.Gallery,
  'ui/gallery-tile': WPImports.GalleryTile,
  'ui/iframe': WPImports.Iframe,
  'ui/jobs': Jobs,
  'ui/landing-page-products': LandingPageProducts,
  'ui/main-block': WPImports.MainBlock,
  'ui/media-block': WPImports.MediaBlock,
  'ui/page-container': WPImports.PageContainer,
  'ui/partner-logo': WPImports.PartnerLogo,
  'ui/partner-logo-container': WPImports.PartnerLogoContainer,
  'ui/people': People,
  'ui/posts': Posts,
  'ui/skeleton-video': WPImports.SkeletonVideo,
  'ui/tile': WPImports.Tile,
  // 'ui/dynamic-form', WPImports.
  'ui/typography': WPImports.Typography,
};

type WPBlocksProps = {
  blocks: Block[];
};

export const WPBlocks: FC<WPBlocksProps> = ({ blocks }) =>
  blocks.map((block, index) => {
    const Component = componentMap[block.blockName];

    if (!Component)
      return (
        <div
          dangerouslySetInnerHTML={{ __html: block.innerHTML ?? '' }}
          key={index}
        />
      );

    const props = block.attrs as ComponentProps<typeof Component>;
    const hasChildren = block?.innerBlocks?.length > 0;

    if (hasChildren)
      return (
        // eslint-disable-next-line
        // @ts-ignore
        <Component key={index} {...props}>
          {hasChildren && <WPBlocks blocks={block.innerBlocks} />}
        </Component>
      );

    return (
      // eslint-disable-next-line
      // @ts-ignore
      <Component key={index} {...props} />
    );
  });
