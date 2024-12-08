import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { eq } from "drizzle-orm"
import { db } from "@/lib/db"
import {users} from "@/lib/db/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: {
        strategy: "jwt",
    },
    adapter: DrizzleAdapter(db),
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const {email, password} = credentials
                let user = null
                //user = await db.select().from(users).where(eq(users.email , email as string))
                user = await db.query.users.findFirst({ where: eq(users.email , email as string) })
                console.log(user)

                if (!user) {
                    throw new Error("Invalid credentials.")
                }
                return user
            },
        }),
    ],
})