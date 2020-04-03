import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args, { request }) => {
            console.log(prisma);
            const user = await prisma.createUser({ username, email, firstName, lastName, bio });
            return user;
        }
    }
};