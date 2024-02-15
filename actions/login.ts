"use server"
import { LoginSchema } from "../schemas"
import * as z from "zod"

export const Login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Invalid Fields "! }
    }
    return {success: "You are Login"}
}