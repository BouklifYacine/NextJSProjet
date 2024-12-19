import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import prisma from '@/prisma/client'
import BadgeOptions from '@/components/BadgeOptions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Taches = async () => {

    const taches = await prisma.taches.findMany({
        orderBy : {
            Id : 'asc'
        }
    })
  return (
  <>
    <Link href='/crud'>
    <Button> Créer une tache </Button></Link>
    <Table>
    <TableHeader>
      <TableRow>
      <TableHead >ID</TableHead>
      <TableHead>Titre</TableHead>
        <TableHead >Message</TableHead>
        <TableHead>Status</TableHead>
        
      </TableRow>
    </TableHeader>
    <TableBody>
      {taches.map((tache) => (
        <TableRow key={tache.Id}>
                 <TableCell className="font-medium">{(tache.Id)}</TableCell>
                 <TableCell className='font-bold text-blue-400 hover:text-blue-600'>
                  <Link href={`/taches/${tache.Id}`}>{tache.Titre}</Link>
                  </TableCell>
          <TableCell className="font-medium">{tache.Message}</TableCell>
          <TableCell> <BadgeOptions taches={tache.Status}></BadgeOptions></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  </>
  
  )
}

export default Taches