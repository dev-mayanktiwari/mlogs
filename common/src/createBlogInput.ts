import { z } from "zod";

export const createBlogInput = z.object({
    title : z.string().trim().min(1, "Title must be provided."),
    content : z.string().trim().min(100, "Content must be 100 characters long.")
})

export type CreateBlogInput = z.infer<typeof createBlogInput> 