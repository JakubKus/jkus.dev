import PostType from './post';

export type PostLinkType = Pick<PostType, 'title' | 'slug'> | null;
