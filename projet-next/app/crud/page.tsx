"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useForm} from "react-hook-form"

import axios from "axios"
import { useRouter } from 'next/navigation'

interface Formulaire {
  Titre : string,
  Message : string
}

const Crud = () => {

  const router = useRouter()
  const {register, handleSubmit, reset} = useForm<Formulaire>()

      async function ValidationFormulaire(data : Formulaire){
        await axios.post('/api/crud', data )
       router.push('/')
        console.log(data)
        reset()
      }

  return (
    <div className="w-3/4 mx-auto mt-6 rounded-xl px-4 py-6 shadow-sm">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-bold">Remplissez vos taches </h1>

        <form onSubmit={handleSubmit(ValidationFormulaire)}>
        <div className="w-full max-w-sm space-y-2">
         
          <Label htmlFor="Titre" className='font-semibold'>Titre</Label>
          <Input type="text" id="Titre" placeholder="Titre" {...register('Titre')} />

          <Label htmlFor="Message" className='font-semibold'>Message</Label>
          <Input type="text" id="Message" placeholder="Message" {...register('Message')} />

          <Button className="mt-2 font-bold">
          Valider
        </Button>
        </div>

        </form>
    
      </div>
    </div>
  )
}

export default Crud