import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args, { request }) => {
            const { username, email, firstName = "", lastName = "", bio = "" } = args;
            const exists = await prisma.$exists.user({ username });
            if (exists) {
                throw Error("This username / email is already taken");
            }
            await prisma.createUser({
                username,
                email,
                firstName,
                lastName,
                bio
            });
            return true;
        }
    }
};