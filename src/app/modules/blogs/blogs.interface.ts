import { Types } from 'mongoose';

export interface IBlog {
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished: boolean;
  isDeleted: boolean;
}
