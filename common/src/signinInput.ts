import { z } from "zod";

export const signinInput = z.object({
    email : z.string().trim().email("Invalid email address."),
    password : z.string().trim().min(8, "Password must be 8 characters long.")
})

export type SigninInput = z.infer<typeof signinInput>