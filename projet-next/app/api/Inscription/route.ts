import SchemaInscription from "@/app/schemas/SchemaInscription";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest){
    const body = await request.json()
    const validation = SchemaInscription.safeParse(body)

    if(validation.success) return NextResponse.json({ error : "Vous devez rentrez un mail et un mot de passe valide"}, {status : 404})

    const email = await prisma.user.findUnique({
        where : { email : body.email}
    })
    
    if(email) return NextResponse.json({error : "Cet email existe déja "})
    
}