import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email("Not valid email address"),
    phone: z.string().refine((value) => value.length >= 10, "Phone number must be at least 10 digits")
});
