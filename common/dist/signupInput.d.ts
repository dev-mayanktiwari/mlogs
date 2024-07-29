import { z } from "zod";
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    username: z.ZodString;
    role: z.ZodDefault<z.ZodOptional<z.ZodEnum<["USER", "ADMIN"]>>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    username: string;
    role: "USER" | "ADMIN";
}, {
    email: string;
    password: string;
    name: string;
    username: string;
    role?: "USER" | "ADMIN" | undefined;
}>;
export type SignupInput = z.infer<typeof signupInput>;
