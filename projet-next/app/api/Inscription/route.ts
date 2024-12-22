import SchemaInscription from "@/app/schemas/SchemaInscription";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(request : NextRequest){
    const {email , password} = await request.json()
    const validation = SchemaInscription.safeParse({email , password})

    if(!validation.success) return NextResponse.json({ error : "Vous devez rentrez un mail et un mot de passe valide"}, {status : 404})

    const UtilisateurExistant = await prisma.user.findUnique({
        where : { email}
    })
    
    if(UtilisateurExistant) return NextResponse.json({error : "Cet email existe déja "}, {status: 400})

  const HashedPassword = await bcrypt.hash(password, 10)

  const NouvelUtilisateur = await prisma.user.create({
    data : {
        email,
        HashedPassword
    }
  })

  return NextResponse.json({email : NouvelUtilisateur.email})
    
}