import {
  Block,
  getJobs,
  getPeople,
  getPosts,
  submitForm,
  WPComponentNames,
} from '@/services';
import { getForm } from '@/services/getForm';
import * as WPImports from '@botspot/ui';
import { ComponentProps, FC } from 'react';

import { getProducts } from '../services/index';
import { NextButton } from './NextButton';
import { ProductsTopic } from './ProductsTopic';

type ComponentMap = Record<WPComponentNames, FC<ComponentProps<any>>>;

const Form: FC<ComponentProps<typeof WPImports.DynamicForm>> = (props) => {
  return (
    <WPImports.DynamicForm
      {...props}
      getForm={getForm}
      submitForm={submitForm}
    />
  );
};

const DownloadAreaContent: FC<
  ComponentProps<typeof WPImports.DownloadAreaContent>
> = async (props) => {
  const { data } = await getProducts();
  return (
    <WPImports.DownloadAreaContent
      {...props}
      getForm={getForm}
      products={data}
      submitForm={submitForm}
    />
  );
};

const Jobs: FC = async () => {
  const { data } = await getJobs();
  return <WPImports.Jobs jobs={data}></WPImports.Jobs>;
};

const People: FC = async () => {
  const { data } = await getPeople();
  return <WPImports.People people={data}></WPImports.People>;
};

export const Posts: FC<ComponentProps<typeof WPImports.Posts>> = async (
  props,
) => {
  return <WPImports.Posts {...props} getPosts={getPosts}></WPImports.Posts>;
};

const LandingPageProducts: FC<
  ComponentProps<typeof WPImports.LandingPageProducts>
> = async (props) => {
  const { data } = await getProducts();
  return <WPImports.LandingPageProducts {...props} products={data} />;
};

const componentMap: Partial<ComponentMap> = {
  'ui/banner': WPImports.Banner,
  'ui/button': NextButton,
  'ui/download-area-content': DownloadAreaContent,
  'ui/dynamic-form': Form,
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
  'ui/products-topic': ProductsTopic,
  'ui/skeleton-video': WPImports.SkeletonVideo,
  'ui/tile': WPImports.Tile,
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
