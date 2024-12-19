"use client"

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
import { useRouter } from 'next/navigation'
import axios from 'axios'

const DeleteButton = ({ tacheId }: { tacheId: number }) => {
    const router = useRouter()

    const SupprimerTache = async () => {
        try {
            const reponse = await axios.delete('/api/crud/' + tacheId)
            if (reponse.status === 200){
                router.push('/taches')
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">Supprimer</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Voulez vous supprimez cette tache?</AlertDialogTitle>
                    <AlertDialogDescription className='font-normal text-gray-600'>
                        En appuyant sur supprimer votre tache sera définitivement perdue.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='bg-gray-200'>Annuler</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-600' onClick={SupprimerTache}>Supprimer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteButton