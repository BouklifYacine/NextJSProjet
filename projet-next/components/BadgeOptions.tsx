import { Options } from '@prisma/client'
import React from 'react'
import { Badge } from './ui/badge'

interface Props {
    taches : Options
}

const BadgeOptions = ({taches} : Props) => {

    if(taches === "EN_COURS")
       return <Badge variant="secondary"> En Cours </Badge> 
    
  return (
    <Badge variant='destructive'> Fini </Badge>
  )
}

export default BadgeOptions