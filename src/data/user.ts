import { db, users } from "@/app/api/auth/schema";

export const getUserByEmail = async (email: string) => {
    try {
        const user = (await db.select().from(users)).find((user)=>user.email===email)
        return user
    } catch(error) {
        return error;
    }
};
