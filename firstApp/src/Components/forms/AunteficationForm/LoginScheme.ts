import {z} from "zod";

export const LoginScheme = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(8, "Password is required"),
    rememberMe: z.boolean().default(false),
})

export type LoginSchemeInput = z.input<typeof LoginScheme>;
export type LoginSchemeOutput = z.output<typeof LoginScheme>;
