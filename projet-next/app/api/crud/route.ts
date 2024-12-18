import { NextRequest, NextResponse } from "next/server";
import SchemaTaches from "@/app/schemas/SchemaTaches";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request : NextRequest){
   return  NextResponse.json({ message : "Salut "})
}

export async function POST(request : NextRequest){
    const body = await request.json()
    const validation =  SchemaTaches.safeParse(body)

    if(!validation.success) return NextResponse.json({ error : " Vous devez respectez le schéma "}, {status : 400})

    const taches = await prisma.taches.create({
        data : { Titre : body.Titre, Message: body.Message}
    })

    return NextResponse.json(taches)
}