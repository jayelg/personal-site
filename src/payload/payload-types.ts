/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Layout".
 */
export type Layout =
  | {
      sideContentPosition: 'scrollSideContent' | 'fixedSideContentWhenVisible' | 'fixedSideContentAlways';
      scrollSnap?: boolean | null;
      fullPageHeight?: boolean | null;
      sideColumn: SideColumn;
      mainColumn: MainColumn;
      id?: string | null;
    }[]
  | null;
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkGroupField".
 */
export type LinkGroupField =
  | {
      link: LinkField;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    posts: Post;
    media: Media;
    category: Category;
    keywords: Keyword;
    clients: Client;
    users: User;
    uploads: Upload;
    redirects: Redirect;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    site: Site;
    'hidden-layout': HiddenLayout;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  publishedAt?: string | null;
  slug?: string | null;
  layout?: Layout;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Upload | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SideColumn".
 */
export interface SideColumn {
  style: 'none' | 'hero' | 'postHero' | 'projectHero' | 'singleLayout' | 'twoRows';
  hero?: Hero;
  projectHero?: ProjectHero;
  sideContent1?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  sideContent2?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Hero".
 */
export interface Hero {
  media?: (number | null) | Media;
  description?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  links?: LinkGroupField;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  caption?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  media: number | Upload;
  mediaDark?: number | Upload | null;
  mediaMobile?: number | Upload | null;
  mediaMobileDark?: number | Upload | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads".
 */
export interface Upload {
  id: number;
  blurhash?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktopHalf?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tabletHalf?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkField".
 */
export interface LinkField {
  type?: ('reference' | 'custom') | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: 'pages';
    value: number | Page;
  } | null;
  url?: string | null;
  label: string;
  appearance?: ('default' | 'primary' | 'secondary') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProjectHero".
 */
export interface ProjectHero {
  year?: number | null;
  client?: (number | null) | Client;
  usePostDescription?: boolean | null;
  customDescription?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  links?: LinkGroupField;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "clients".
 */
export interface Client {
  id: number;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MainColumn".
 */
export interface MainColumn {
  style: 'postArchive' | 'singleLayout' | 'twoColumns';
  postArchive?: PostArchive
  column1?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  column2?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: number;
  title: string;
  description: string;
  category: number | Category;
  keywords?: (number | Keyword)[] | null;
  slug?: string | null;
  publishedAt?: string | null;
  authors?: (number | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  card?: {
    media?: (number | null) | Media;
    backgroundColour?: string | null;
    overlayImage?: boolean | null;
    showDate?: boolean | null;
    hideTitle?: boolean | null;
  };
  layout?: Layout;
  relatedPosts?: (number | Post)[] | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Upload | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "category".
 */
export interface Category {
  id: number;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "keywords".
 */
export interface Keyword {
  id: number;
  title?: string | null;
  parent?: (number | null) | Keyword;
  breadcrumbs?:
    | {
        doc?: (number | null) | Keyword;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: number;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: number | Page;
        } | null)
      | ({
          relationTo: 'posts';
          value: number | Post;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site".
 */
export interface Site {
  id: number;
  siteTitle?: string | null;
  siteDescription?: string | null;
  siteSourceLink?: string | null;
  faviconSVG?: number | Media | null;
  faviconICO?: number | Media | null;
  navItems?:
    | {
        link: LinkField;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-layout".
 */
export interface HiddenLayout {
  id: number;
  layout?: (CallToActionBlock | MediaBlock | CodeBlock | VimeoBlock)[] | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CallToActionBlock".
 */
export interface CallToActionBlock {
  invertBackground?: boolean | null;
  richText?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  links?: LinkGroupField;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock".
 */
export interface MediaBlock {
  aspectRatio?: ('default' | 'square' | 'video') | null;
  sideCaption?: boolean | null;
  layout?: ('default' | 'twoColumn' | 'heroGrid') | null;
  media1: number | Media;
  media1ShowCaption: boolean | null;
  media2?: (number | null) | Media;
  media2ShowCaption: boolean | null;
  media3?: (number | null) | Media;
  media3ShowCaption: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'mediaBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeBlock".
 */
export interface CodeBlock {
  language:
    | 'css'
    | 'dockerfile'
    | 'go'
    | 'graphql'
    | 'handlebars'
    | 'html'
    | 'java'
    | 'javascript'
    | 'kotlin'
    | 'markdown'
    | 'pgsql'
    | 'python'
    | 'rust'
    | 'scss'
    | 'swift'
    | 'typescript'
    | 'xml'
    | 'yaml';
  code: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'code';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VimeoBlock".
 */
export interface VimeoBlock {
  videoId?: string | null;
  previewImage?: number | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'vimeoBlock';
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}

export interface PostArchive {
  category?: (number | Category)[] | null;
  limit?: number | null;
  showPageRange?: boolean | null;
  populatedDocs?:
    | {
        relationTo: 'posts';
        value: number | Post;
      }[]
    | null;
  populatedDocsTotal?: number | null;
  id?: string | null;
}