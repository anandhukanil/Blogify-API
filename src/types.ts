export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IComment {
  id: string;
  postId: string;
  authorId: string;
  author: IUser;
  content: string;
  date: string;
}

export interface IPost {
  id: string;
  title: string;
  authorId: string;
  author: IUser;
  content: string;
  tags: string[];
  date: string;
  comments: IComment[];
  image: string;
  category: string;
  isPublished: boolean;
  meta: {
    views: number;
    likes: number;
    shares: number;
  }
}

export enum Models {
  User = "user",
  Comment = "comment",
  Post = "post"
}