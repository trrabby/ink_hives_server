import { Schema, model } from 'mongoose';
import { IBlog } from './blogs.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: [true, 'Blog already exist on this title'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      unique: [true, 'This content is already exist'],
    },
    author: {
      type: Schema.Types.ObjectId,
      required: [true, 'Author is required'],
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const BlogModel = model<IBlog>('Blog', blogSchema);
