import { db, users } from "@/lib/drizzle";

export const getUserByEmail = async (email: string) => {
    try {
        const user = (await db.select().from(users)).find((user)=>user.email===email);

        return user;
    } catch{
        return null;
    }
};
