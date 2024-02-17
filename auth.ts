import { db } from "@/lib/drizzle"
import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (passwordsMatch) return { email: user.email, name: user.name };
                }

                return null;
            },
        })
    ],
    adapter: DrizzleAdapter(db),
} satisfies NextAuthConfig

export const { handlers, auth, signOut, signIn } = NextAuth(authConfig)
