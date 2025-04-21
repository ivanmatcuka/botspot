export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Seo = {
  article_author: string;
  article_modified_time: string;
  article_published_time: string;
  article_publisher: string;
  author: string;
  canonical: string;
  description: string;
  og_description: string;
  og_locale: string;
  og_site_name: string;
  og_title: string;
  og_type: string;
  og_url: string;
  title: string;
  twitter_card: string;
  twitter_creator: string;
  twitter_site: string;
  og_image: Array<{
    height: number;
    type: string;
    url: string;
    width: number;
  }>;
  robots: {
    follow: string;
    index: string;
    'max-image-preview': string;
    'max-snippet': string;
    'max-video-preview': string;
  };
  schema: {
    '@context': string;
    '@graph': Array<{
      '@id': string;
      '@type': unknown;
      commentCount?: number;
      contentUrl?: string;
      dateModified?: string;
      datePublished?: string;
      description?: string;
      foundingDate?: string;
      gender?: string;
      headline?: string;
      height?: number;
      honorificSuffix?: string;
      inLanguage?: string;
      jobTitle?: string;
      keywords?: string;
      legalName?: string;
      name?: string;
      numberOfEmployees?: number;
      sameAs?: Array<string>;
      slogan?: string;
      thumbnailUrl?: string;
      url?: string;
      width?: number;
      wordCount?: number;
      author?: {
        '@id': string;
        name: string;
      };
      breadcrumb?: {
        '@id': string;
      };
      copyrightHolder?: {
        '@id': string;
      };
      founder?: {
        '@type': string;
        name: string;
        sameAs: string;
      };
      image?: {
        '@id': string;
        '@type'?: string;
        caption?: string;
        contentUrl?: string;
        inLanguage?: string;
        url?: string;
      };
      isPartOf?: {
        '@id': string;
      };
      itemListElement?: Array<{
        '@type': string;
        item?: string;
        name: string;
        position: number;
      }>;
      logo?: {
        '@id': string;
        '@type': string;
        caption: string;
        contentUrl: string;
        height: number;
        inLanguage: string;
        url: string;
        width: number;
      };
      mainEntityOfPage?: {
        '@id': string;
      };
      memberOf?: {
        '@type': string;
        description: string;
        logo: string;
        name: string;
        sameAs: Array<string>;
        url: string;
      };
      parentOrganization?: {
        '@type': string;
        description: string;
        logo: string;
        name: string;
        sameAs: Array<string>;
        url: string;
      };
      potentialAction?: Array<{
        '@type': string;
        name?: string;
        target: unknown;
        'query-input'?: {
          '@type': string;
          valueName: string;
          valueRequired: boolean;
        };
      }>;
      primaryImageOfPage?: {
        '@id': string;
      };
      publisher?: {
        '@id': string;
      };
      worksFor?: {
        '@id': string;
      };
    }>;
  };
  twitter_misc: {
    'Est. reading time': string;
    'Written by': string;
  };
};
