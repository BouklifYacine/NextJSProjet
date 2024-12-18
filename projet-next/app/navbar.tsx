import React from 'react'
import { DiAndroid } from "react-icons/di";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-3/4 mx-auto bg-gray-300 rounded-xl mt-6 px-4 py-3 flex items-center justify-between shadow-sm">
  
    <div className="flex items-center">
      <DiAndroid className="text-2xl text-blue-600" />
    </div>

 
    <div className="flex items-center gap-6">
     
      <Link 
        href="/" 
        className="text-blue-500 hover:text-blue-700 transition-colors text-lg"
      >
        Accueil
      </Link>

      <Link 
        href="/crud" 
        className="text-blue-500 hover:text-blue-700 transition-colors text-lg"
      >
        Crud
      </Link>
    </div>

 
    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </nav>
  )
}

export default Navbar