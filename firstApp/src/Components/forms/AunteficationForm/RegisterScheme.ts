import {z} from "zod";

export const RegisterScheme = z.object({
    email: z.string().email("Email is required"),
    username: z.string().min(8, "Username is required"),
    address: z.string().optional(),
    password: z.string().min(8, "Password is required"),
    confirmPassword: z.string().min(8, "Password is required"),

})
    .refine((data ) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type RegisterSchemeInput = z.input<typeof RegisterScheme>;
export type RegisterSchemeOutput = z.output<typeof RegisterScheme>;