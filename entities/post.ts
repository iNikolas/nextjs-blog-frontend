export interface PostBase {
  id: string;
  created: string;
  updated: string;
  title: string;
}

export interface PostMeta {
  shortDesc: string;
  featuredImg: string;
}

export interface PostContent {
  content: string;
  postImg: string;
}

export type FeedPost = PostBase & { meta: PostMeta };

export type PostsFeed = Array<FeedPost>;
