import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import prisma from '@/prisma/client'
import Link from 'next/link'
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
     <Link href={`/taches/${taches.Id}/edit`}>
     <Button className='ml-4'> Editer ma page  </Button></Link>
     <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Supprimer </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Voulez vous supprimez cette tache? </AlertDialogTitle>
          <AlertDialogDescription className='font-normal text-gray-600'>
            En appuuyant sur supprimer votre tache sera définitivement perdue .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='bg-gray-200'>Annuler</AlertDialogCancel>
          <AlertDialogAction className='bg-red-600'>Supprimer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <p>{taches.Id}</p>
    <p>{taches.Titre}</p>
    <p>{taches.Message}</p>
    <p>{taches.Status}</p>
   
    </>
  )
}

export default page