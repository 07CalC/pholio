import { Container } from "postcss";
import { z } from "zod";

export const onboardingSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters long"),
    displayname: z.string().min(4, "Display Name must be at least 4 characters long"),
    age: z.coerce.number().min(5, "Age must be at least 5").max(100, "Age must be less than 100"),
    gender: z.enum(["M", "F"], {required_error: "Gender is required"}),
    professionaltitle: z.string().min(4, "Title must be at least 4 characters long"),
    description: z.string().min(10, "must be atleast 10 character long").optional(),
    displayimage: z.string().url().optional(),
    contactemail: z.string().email("Invalid email").optional(),
    contactphone: z.coerce.number().min(1000000000, "Phone number must be at least 10 digits long").optional(),
    sociallinks: z.array(z.object({
        name: z.string(),
        link: z.string().url("Invalid URL")
    }))
})