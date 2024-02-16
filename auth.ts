import { db } from "@/lib/drizzle"
import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/GitHub"
import { DrizzleAdapter } from "@auth/drizzle-adapter"


export const authConfig = {
    providers: [GitHub],
    adapter: DrizzleAdapter(db),
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const paths = ["/cart",]
            const isProtected = paths.some((path) => nextUrl.pathname.startsWith(path))

            if (isProtected && !isLoggedIn) {
                const redirectUrl = new URL("api/auth/signin", nextUrl.origin)
                redirectUrl.searchParams.append("callbackUrl", nextUrl.href)
                return Response.redirect(redirectUrl)
            }

            return true
        },
    }
} satisfies NextAuthConfig

export const { handlers, auth, signOut } = NextAuth(authConfig)
