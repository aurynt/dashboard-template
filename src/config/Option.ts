import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "hanzo",
          username: credentials?.username??'no name',
          email: `${credentials?.username??'noname'}@example.com`,
        };
        return user
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
