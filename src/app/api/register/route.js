import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();
export async function POST(request){
    const body = await request.json();
    const {firstName, lastName, email, password, confirmPassword} = body.data;
    console.log(body.data);

    if(!firstName || !lastName || !email || !password || !confirmPassword){
        alert('Missing First Name, Last Name, Email, Password, or Confirm Password');
        return new NextResponse("Missing First Name, Last Name, Email, Password, or Confirm Password", {status: 400});
    }

    const exist = await prisma.user.findUnique({
        where : {
            email: email
        }
    });

    if(exist) {
        return new NextResponse("User already exist", {status: 400});
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const passwordMatch = await bcrypt.compare(confirmPassword, hashedPassword);
    if(!passwordMatch){
        return null;
    }

    const user = await prisma.user.create({
        data:{
            firstName,
            lastName,
            email,
            hashedPassword,
            confirmPassword
        }
    });

    return NextResponse.json(user);
}