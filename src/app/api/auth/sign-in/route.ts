// import { NextRequest, NextResponse } from "next/server";
// import { LoginSchema } from "../../../../../schemas";
// import { getUserByEmail } from "@/data/user";
// import { signIn } from "../../../../../auth";
// import { DEFAULT_LOGIN_REDIRECT } from "../../../../../routes";
// import { AuthError } from "next-auth";

// export async function POST(request: NextRequest) {
//     const res = await request.json()
//     const validatedFields = LoginSchema.safeParse(res)
//     if (!validatedFields.success) {
//         return { error: "Invalid Fields "! }
//     }
//     try {
//         const { email, password } = validatedFields.data
//         const existingUser = await getUserByEmail(email)
//         if (!existingUser || !existingUser.email || !existingUser.password) {
//             return { error: "Incorrect Email or Password!" }
//         }
//         await signIn("credentials", {
//             email,
//             password,
//             redirectTo: DEFAULT_LOGIN_REDIRECT
//         })
//     } catch (error) {
//         if (error instanceof AuthError) {
//             switch (error.type) {
//                 case "CredentialsSignin":
//                     return { error: "Invalid credentials!" }
//                 default:
//                     return { error: "Something went wrong!" }
//             }
//         }

//         throw error;
//     }
// }
