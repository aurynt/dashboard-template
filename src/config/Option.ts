import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { JWT, JWTDecodeParams, JWTEncodeParams } from "next-auth/jwt";
import { sign } from "crypto";

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
      // You can define your own encode/decode functions for signing and encryption
      async encode(params: JWTEncodeParams): Promise<string> {
        // return a custom encoded JWT string
        console.log('encode',params.token)
        return params.token
      },
      async decode(params: JWTDecodeParams): Promise<JWT | null> {
        // return a `JWT` object, or `null` if decoding failed
         console.log('decode',params.token)
        return {};
      },
    },

  callbacks: {
    async jwt({ token, user, session }) {
      console.log("jwt", token);
      return token;
    },
    async session({ token, user, session }) {
      console.log("session", session);
      return session;
    },
  },
};
