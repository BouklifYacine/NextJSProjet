import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@/prisma/client";


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
        name : "Credentials",
        credentials : {
          email : {label : "Email" , type : "email" , placeholder : "email"},
          password : {label : "password" , type : "password" , placeholder : "password"}
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials.password) return null
  
  
         const user =  await prisma.user.findUnique({
            where : {email : credentials.email}})
            if(!user) return null
           const passwordmatch = await bcrypt.compare(credentials.password, user.HashedPassword!)
           return passwordmatch ? user : null
          }}),
  
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'database'  
  }
};


const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };