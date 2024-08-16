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
  text: string;
  postImg: string;
}

export type NewPost = { title: string } & PostMeta & PostContent;

export type FeedPost = PostBase & { meta: PostMeta };

export type IndividualPost = PostBase & { content: PostContent };

export type PostsFeed = Array<FeedPost>;
