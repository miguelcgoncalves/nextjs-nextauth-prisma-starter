import NextAuth, { AuthOptions } from "next-auth";
import UserService from "@/services/UserService";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { nextAuthPages } from "@/config";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  pages: nextAuthPages,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            return null;
          }
          const user = await UserService.getUserByEmail(credentials.username);
          if (user && bcrypt.compareSync(credentials.password, user.password)) {
            return {
              id: user.id.toString(),
              email: user.email,
              name: user.firstName + " " + user.lastName,
            };
          }
        } catch (e) {
          console.error(e);
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.email,
          email: profile.email,
          name: profile.name,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
