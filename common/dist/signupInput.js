"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().trim().email("Invalid email address."),
    password: zod_1.z.string().trim().min(8, "Password must be 8 characters long."),
    name: zod_1.z.string().trim().min(1, "Name must be provided."),
    username: zod_1.z.string().trim().min(5, "Username must be atleast 5 characters long."),
    role: zod_1.z.enum(["USER", "ADMIN"]).optional().default("USER")
});
