import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import databaseConnection from "./lib/db";
import { User } from "./models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password)
          throw new CredentialsSignin("Please provide both email and password");

        await databaseConnection();

        const user = await User.findOne({ email })
                               .select("+password +role");

        if (!user) {
          throw new CredentialsSignin({ cause: "Invalid email or password" });
        }

        const matched = await compare(password,user.password);

        if(!matched){
          throw new Error("password did not matched");
        }

      },
    }),
  ],
});
