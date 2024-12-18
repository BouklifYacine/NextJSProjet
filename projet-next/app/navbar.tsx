import React from 'react'
import { DiAndroid } from "react-icons/di";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navbar = () => {

  // ici je gère les liens dans la navbar

const liens = [
  {label : "Accueil" , lien : "/"},
  {label : "Crud" , lien : "/crud"}

]

  return (
    <nav className="w-3/4 mx-auto bg-gray-300 rounded-xl mt-6 px-4 py-3 flex items-center justify-between shadow-sm">
  
    <div className="flex items-center">
      <DiAndroid className="text-2xl text-blue-600" />
    </div>

 
    <div className="flex items-center gap-6">

      {liens.map(lien =>  <Link key={lien.label} href={lien.lien} className="text-black hover:text-blue-700 transition-colors text-lg">
       {lien.label}
      </Link> )}
   
    </div>

 
{/* On va gérer l'image de l'avatar quand on sera a la partie de l'authentification */}

    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </nav>
  )
}

export default Navbar