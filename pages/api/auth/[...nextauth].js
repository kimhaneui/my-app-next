import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liJAW9SRJwMOIGku',
      clientSecret: '1139b2a4b5da69f63c3f1d26c0f146e1cedf0d0c',
    }),
  ],
  secret : 'kimhaneui2543'
};
export default NextAuth(authOptions); 