import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'
import FormulaireTache from '../../_components/FormulaireTache'


interface Props {
    params : { id : string}
}

const EditPage = async ({params} : Props) => {

    const tacheid = await prisma.taches.findUnique({
        where : { Id : parseInt(params.id)}
    })

    if(!tacheid) notFound()
        
  return (
    <FormulaireTache tache={tacheid} ></FormulaireTache>
  )
}

export default EditPage