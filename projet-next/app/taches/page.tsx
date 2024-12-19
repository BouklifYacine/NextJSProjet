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


const Taches = async () => {

    const taches = await prisma.taches.findMany()
  return (
    <Table>
    <TableHeader>
      <TableRow>
      <TableHead >ID</TableHead>
        <TableHead >Message</TableHead>
        <TableHead>Titre</TableHead>
        <TableHead>Status</TableHead>
        
      </TableRow>
    </TableHeader>
    <TableBody>
      {taches.map((tache) => (
        <TableRow key={tache.Id}>
                 <TableCell className="font-medium">{(tache.Id)}</TableCell>
          <TableCell className="font-medium">{tache.Message}</TableCell>
          <TableCell>{tache.Titre}</TableCell>
          <TableCell> <BadgeOptions taches={tache.Status}></BadgeOptions></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default Taches