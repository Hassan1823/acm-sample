import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { toast } from "react-toastify";


const prisma = new PrismaClient();

export const authOptions ={
    adapter: PrismaAdapter(prisma),
    providers: [ 
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email:{label: "Email", type: "email"}
                ,password:{label: "Password", type: "password"},
            },
            async authorize(credentials){
                if(!credentials.email || !credentials.password){
                    toast.error('Fields must be filled', { autoClose: 2000 });
                    return false;
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                });

                if(!user){
                    return null;
                }

                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
                if(!passwordMatch){
                    return null;
                }

                return user;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST }
