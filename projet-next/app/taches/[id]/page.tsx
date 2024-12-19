import { Button } from '@/components/ui/button'
import prisma from '@/prisma/client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import DeleteButton from './DeleteButton'

interface Props {
    params : { id : string}
}

const Page = async ({params} : Props) => {
    const taches = await prisma.taches.findUnique({
        where : { Id : parseInt(params.id)}
    })

    if(!taches) notFound()

    return (
        <>
            <Link href={`/taches/${taches.Id}/edit`}>
                <Button className='ml-4'>Editer ma page</Button>
            </Link>
            
            <DeleteButton tacheId={taches.Id} />

            <p>{taches.Id}</p>
            <p>{taches.Titre}</p>
            <p>{taches.Message}</p>
            <p>{taches.Status}</p>
        </>
    )
}

export default Page