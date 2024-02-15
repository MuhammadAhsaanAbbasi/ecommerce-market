"use server"
import bcrypt from "bcryptjs"
import { RegisterSchema } from "../schemas"
import * as z from "zod"
import { db, users } from "@/app/api/auth/schema"
import { getUserByEmail } from "../src/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatePath = RegisterSchema.safeParse(values);
    if(!validatePath.success){
        return {error:"Invalid Fields"}
    }
    const {name,email,password} = validatePath.data
    const hashPassword = await bcrypt.hash(password,10)

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return {error: "Email Already Exist"}
    }

    await db.insert(users).values({
        name,
        email,
        password:hashPassword
    })
    return {success: "You are Registerd"}
}