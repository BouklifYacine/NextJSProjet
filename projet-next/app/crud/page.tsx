import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Crud = () => {
  return (
    <div className="w-3/4 mx-auto mt-6 rounded-xl px-4 py-6 shadow-sm">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-bold">Remplissez vos taches </h1>
        
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="Titre" className='font-semibold'>Titre</Label>
          <Input type="text" id="Titre" placeholder="Titre" />

          <Label htmlFor="Message" className='font-semibold'>Message</Label>
          <Input type="text" id="Message" placeholder="Message" />
        </div>
        
        <Button className="mt-2 font-bold">
          Valider
        </Button>
      </div>
    </div>
  )
}

export default Crud