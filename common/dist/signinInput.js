"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInput = void 0;
const zod_1 = require("zod");
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().trim().email("Invalid email address."),
    password: zod_1.z.string().trim().min(8, "Password must be 8 characters long.")
});
