'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import SchemaInscription from "../schemas/SchemaInscription"
import { z } from "zod"
import axios, { AxiosError } from "axios"
import { useState } from "react"

type SchemaInscriptionType = z.infer<typeof SchemaInscription>

const InscriptionPage = () => {
   const router = useRouter()
   const [error, setError] = useState("")
   const {register, handleSubmit, formState: { isSubmitting , errors }} = useForm<SchemaInscriptionType>({
       resolver: zodResolver(SchemaInscription)
   })

   const onSubmit = async (data: SchemaInscriptionType) => {
       try {
           await axios.post('/api/inscription', data)
           router.push('/') 
       } catch (error) {
           if (error instanceof AxiosError) {
               setError(error.response?.data.error)
           }
       }
   }

   return (
       <div className="flex flex-col items-center justify-center min-h-screen p-4">
           <div className="w-full max-w-md space-y-8 p-8 rounded-lg border">
               <h1 className="text-2xl font-bold text-center">Inscription</h1>
               
               {error && (
                   <div className="p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm">
                       {error}
                   </div>
               )}
               
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                   <div>
                       <Input {...register("email")} type="email" placeholder="Email" />
                       {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                   </div>
                   <div>
                       <Input {...register("password")} type="password" placeholder="Mot de passe" />
                       {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                   </div>
                   <Button type="submit" className="w-full" disabled={isSubmitting}>
                       {isSubmitting ? 'Inscription...' : 'S\'inscrire'}
                   </Button>
               </form>

               <div className="relative my-8">
                   <div className="absolute inset-0 flex items-center">
                       <span className="w-full border-t" />
                   </div>
                   <div className="relative flex justify-center text-sm">
                       <span className="bg-white px-2 text-gray-500">Ou</span>
                   </div>
               </div>

               <Button 
                   onClick={() => signIn('google', { callbackUrl: '/' })}  
                   variant="outline"
                   className="w-full flex items-center gap-2"
               >
                   <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                       <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                       <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                       <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                       <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                   </svg>
                   Se connecter avec Google
               </Button>
           </div>
       </div>
   )
}

export default InscriptionPage