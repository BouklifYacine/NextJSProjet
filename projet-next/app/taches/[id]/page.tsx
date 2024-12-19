import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params : { id : string}
}

const page = async ({params} : Props) => {

    const taches = await prisma.taches.findUnique({
        where : { Id : parseInt(params.id)}
    })

    if(!taches) notFound()

  return (
    <>
    <p>{taches.Id}</p>
    <p>{taches.Titre}</p>
    <p>{taches.Message}</p>
    <p>{taches.Status}</p>
    </>
  )
}

export default page