import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "301764063506-0q9pmlp6frrb3plibhheda6behmc5r7l.apps.googleusercontent.com",
      clientSecret: "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",
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: "secret token",
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/user") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});