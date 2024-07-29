import { z } from "zod";

export const updateBlogInput = z.object({
    id : z.string().trim().min(1, "Id must be provided"),
    title : z.string().trim().min(1, "Title must be provided."),
    content : z.string().trim().min(100, "Content must be 100 characters long.")
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>