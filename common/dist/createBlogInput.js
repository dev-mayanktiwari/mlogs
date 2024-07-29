"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogInput = void 0;
const zod_1 = require("zod");
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string().trim().min(1, "Title must be provided."),
    content: zod_1.z.string().trim().min(100, "Content must be 100 characters long.")
});
