import { z } from 'zod';

const BlogsValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Name is required.')
      .max(30)
      .refine((value) => /^[A-Z]/.test(value), {
        message: 'First Name must start with a capital letter',
      }),
    content: z.string().min(1, 'Content is required.'),
    author: z.string().optional(),
    isPublished: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  }),
});
const updateBlogsValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Name is required.')
      .max(30)
      .refine((value) => /^[A-Z]/.test(value), {
        message: 'First Name must start with a capital letter',
      })
      .optional(),
    content: z.string().min(1, 'Content is required.').optional(),
    author: z.string().optional(),
    isPublished: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const BlogsValidation = {
  BlogsValidationSchema,
  updateBlogsValidationSchema,
};
