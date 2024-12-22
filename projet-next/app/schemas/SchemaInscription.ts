import {z} from "zod"

const SchemaInscription = z.object({
    email : z.string().email().trim(), 
    password : z.string().min(6, " Le mot de passe doit contenir au minimum 6 caractères ")

})

export default SchemaInscription