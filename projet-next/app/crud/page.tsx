"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useForm} from "react-hook-form"
import axios from "axios"
import { useRouter } from 'next/navigation'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from "zod"
import SchemaTaches from './../schemas/SchemaTaches';

type Formulaire = z.infer<typeof SchemaTaches>

const Crud = () => {

  const router = useRouter()
const {register, handleSubmit, reset, formState: {errors} } = useForm<Formulaire>({
  resolver : zodResolver(SchemaTaches)
})

const [soumission, setSoumission] = useState(false)

async function ValidationFormulaire(data : Formulaire) {
  try {
    setSoumission(true)
    const response = await axios.post('/api/crud', data)
   
    if (response.status === 200) {
      router.refresh()
      router.push('/taches')
      reset()
    }
  } catch (error) {
    console.log(error)
  } finally {
    setSoumission(false)
  }
}

  return (
    <div className="w-3/4 mx-auto mt-6 rounded-xl px-4 py-6 shadow-sm">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-bold">Remplissez vos taches </h1>

        <form onSubmit={handleSubmit(ValidationFormulaire)}>
        <div className="w-full max-w-sm space-y-2">

          <Label htmlFor="Titre" className='font-semibold'>Titre</Label>
          <Input type="text" id="Titre" placeholder="Titre" {...register("Titre")} />
          {errors.Titre && <p className='text-red-600'> Veuillez rentrez un bon titre </p> }

          <Label htmlFor="Message" className='font-semibold'>Message</Label>
          <Input type="text" id="Message" placeholder="Message" {...register('Message')} />
          {errors.Message && <p className='text-red-600'> Veuillez rentrez un bon message </p>}

          <Button className="mt-2 font-bold" disabled={soumission}>
          Valider
        </Button>
        </div>

        </form>
    
      </div>
    </div>
  )
}

export default Crud