import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { JWT, JWTDecodeParams, JWTEncodeParams } from "next-auth/jwt";
import { sign, verify } from "jsonwebtoken";
export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24,
    async encode(params: JWTEncodeParams): Promise<string> {
      const { token } = params;
      const secret = process.env.NEXTAUTH_SECRET as string;
      const res = sign(token as JWT, secret);
      return res;
    },
    async decode(params: JWTDecodeParams): Promise<JWT | null> {
      const { token } = params;
      const secret = process.env.NEXTAUTH_SECRET as string;      
      const res = verify(token as string, secret);
      return res as JWT;
    },
  },

  callbacks: {
    async jwt({ token, user, session }) {
      return token;
    },
    async session({ token, user, session }) {
      return session;
    },
  },
};
