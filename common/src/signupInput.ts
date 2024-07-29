import { z } from "zod";

export const signupInput = z.object({
    email : z.string().trim().email("Invalid email address."),
    password : z.string().trim().min(8, "Password must be 8 characters long."),
    name : z.string().trim().min(1, "Name must be provided."),
    username : z.string().trim().min(5, "Username must be atleast 5 characters long."),
    role : z.enum(["USER", "ADMIN"]).optional().default("USER")
})

export type SignupInput = z.infer<typeof signupInput>