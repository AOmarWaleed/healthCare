//! RUN THIS FILE ON THE SERVER TO CAN ACCESS THE SERVER ENVIRONMENT AND DATABASE
"use server";


import { ID, Query } from "node-appwrite";
import { users } from "../appwriter.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    try {
        // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
        const newuser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            //! pass
            undefined,
            user.name
        );

        return parseStringify(newuser);
    } catch (error: any) {
        // Check existing user
        if (error && error?.code === 409) {
            const existingUser = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return existingUser.users[0];
        }
        console.error("An error occurred while creating a new user:", error);
    }
};