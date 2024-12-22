'use client'
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import SchemaInscription from "../schemas/SchemaInscription"
import { z } from "zod"
import axios from "axios"

type SchemaInscriptionType = z.infer<typeof SchemaInscription>

const InscriptionPage = () => {
    const router = useRouter()
    const {register, handleSubmit, reset, formState: { isSubmitting , errors }} = useForm<SchemaInscriptionType>({
        resolver: zodResolver(SchemaInscription)
    })

    const onSubmit = async (data: SchemaInscriptionType) => {
        await axios.post('/api/inscription', data)
        const result = await signIn('credentials', {
            ...data,
            redirect: false,
        })
        reset()
        if (!result?.error) router.push('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md space-y-8 p-8 rounded-lg border">
                <h1 className="text-2xl font-bold text-center">Inscription</h1>
                
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

                <Button 
                    onClick={() => signIn('google', { callbackUrl: '/' })}  
                    variant="outline"
                    className="w-full"
                >
                    Se connecter avec Google
                </Button>
            </div>
        </div>
    )
}

export default InscriptionPage