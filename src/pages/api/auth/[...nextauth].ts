import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "403727950404-s92cpijbebtomuukgmo8s0r2bo6sj31s.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
  