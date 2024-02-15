import { NextRequest, NextResponse } from "next/server";
import { RegisterSchema } from "../../../../../schemas";
import { db, users } from "../schema";
import bcrypt from "bcryptjs"
import { getUserByEmail } from "@/data/user";

export async function POST(request:NextRequest) {
    const res = await request.json()
    const validatePath = RegisterSchema.safeParse(res);
    if(!validatePath.success){
        return {error:"Invalid Fields"}
    }
    try{
        const {name,email,password} = validatePath.data
        const hashPassword = await bcrypt.hash(password,10)
        const userEmail = await getUserByEmail(email);
        if(userEmail){
            return NextResponse.json({error:"User Already Exists"})
        }
        await db.insert(users).values({
            name,
            email,
            password:hashPassword
        }).returning()
        return NextResponse.json({message:"User Registered Succesfully"})
    }catch(err){
        return NextResponse.json((err as {message:string}).message)
    }
}
