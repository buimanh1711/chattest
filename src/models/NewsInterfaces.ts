import { UserType } from "./UserInterfaces";

export interface NewsDataType {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  timestamp: any;
}

export interface NewsCommentType {
  id: string;
  author: UserType;
  content: string;
  timestamp: any;
}