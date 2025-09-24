// types.ts

// Single Post
export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string; // ISO string from API
  updatedAt: string; // ISO string from API
}

// Meta info for pagination
export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

// Generic API Response for posts
export interface IPostResponse {
  data: IPost[];
  meta: IMeta;
}
