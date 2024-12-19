import SchemaTaches from "@/app/schemas/SchemaTaches";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params : { id : string}
}

export async function PATCH(request : NextRequest , {params} : Props){
    const { Titre, Message } = await request.json();
const validation = SchemaTaches.safeParse({Message, Titre})

if(!validation.success) return NextResponse.json(validation.error.flatten().fieldErrors, {status : 400})

const tache = await prisma.taches.findUnique({
    where : { Id : parseInt(params.id) }
})

if(!tache) return NextResponse.json({ error : "Cette tache n'existe pas "} , { status : 400})

const TacheAJour = await prisma.taches.update({
    where : { Id : tache.Id}, 
    data : { Titre, Message}
})

return NextResponse.json(TacheAJour)
}

export async function DELETE(request : NextRequest , {params} : Props){

    const tache = await prisma.taches.findUnique({
        where : { Id : parseInt(params.id) }
    })
    
    if(!tache) return NextResponse.json({ error : "Cette tache n'existe pas "} , { status : 400})
    
    const TacheSupprimé = await prisma.taches.delete({
        where : { Id : parseInt(params.id)}
    })

    return NextResponse.json(TacheSupprimé)
}