import { ImageVideoMetadata } from 'open-graph';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Seo = {
  title: string;
  description: string;
  robots: {
    index: string;
    follow: string;
    'max-snippet': string;
    'max-image-preview': string;
    'max-video-preview': string;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_publisher: string;
  article_author: string;
  article_published_time: string;
  article_modified_time: string;
  og_image: ImageVideoMetadata | ImageVideoMetadata[] | undefined;
  author: string;
  twitter_card: string;
  twitter_creator: string;
  twitter_site: string;
  twitter_misc: {
    'Written by': string;
    'Est. reading time': string;
  };
  schema: {
    '@context': string;
    '@graph': Array<{
      '@type': unknown;
      '@id': string;
      isPartOf?: {
        '@id': string;
      };
      author?: {
        name: string;
        '@id': string;
      };
      headline?: string;
      datePublished?: string;
      dateModified?: string;
      mainEntityOfPage?: {
        '@id': string;
      };
      wordCount?: number;
      commentCount?: number;
      publisher?: {
        '@id': string;
      };
      image?: {
        '@type'?: string;
        inLanguage?: string;
        '@id': string;
        url?: string;
        contentUrl?: string;
        caption?: string;
      };
      thumbnailUrl?: string;
      keywords?: string;
      inLanguage?: string;
      potentialAction?: Array<{
        '@type': string;
        target: unknown;
        'query-input'?: {
          '@type': string;
          valueRequired: boolean;
          valueName: string;
        };
        name?: string;
      }>;
      url?: string;
      name?: string;
      primaryImageOfPage?: {
        '@id': string;
      };
      description?: string;
      breadcrumb?: {
        '@id': string;
      };
      contentUrl?: string;
      width?: number;
      height?: number;
      itemListElement?: Array<{
        '@type': string;
        position: number;
        name: string;
        item?: string;
      }>;
      copyrightHolder?: {
        '@id': string;
      };
      logo?: {
        '@type': string;
        inLanguage: string;
        '@id': string;
        url: string;
        contentUrl: string;
        width: number;
        height: number;
        caption: string;
      };
      sameAs?: Array<string>;
      numberOfEmployees?: number;
      founder?: {
        '@type': string;
        name: string;
        sameAs: string;
      };
      foundingDate?: string;
      slogan?: string;
      legalName?: string;
      parentOrganization?: {
        '@type': string;
        name: string;
        description: string;
        url: string;
        sameAs: Array<string>;
        logo: string;
      };
      memberOf?: {
        '@type': string;
        name: string;
        description: string;
        url: string;
        sameAs: Array<string>;
        logo: string;
      };
      honorificSuffix?: string;
      gender?: string;
      jobTitle?: string;
      worksFor?: {
        '@id': string;
      };
    }>;
  };
};
