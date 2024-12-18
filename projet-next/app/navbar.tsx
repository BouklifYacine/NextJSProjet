"use client"

import React from 'react'
import { DiAndroid } from "react-icons/di"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

type Lien = {
  label: string
  lien: string
}

const Navbar = () => {
  const liens: Lien[] = [
    {label: "Accueil", lien: "/"},
    {label: "Crud", lien: "/crud"}
  ]

  const Direction = usePathname()
  console.log(Direction)


  const getLinkClasses = (lien: string): string => {
    return classNames(
      "transition-colors",
      {
        "text-blue-600": lien === Direction,
        "text-blue-300": lien !== Direction,
        "hover:text-blue-700 font-bold": true,
      }
    )
  }

  return (
    <nav className="w-3/4 mx-auto bg-gray-300 rounded-xl mt-6 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <DiAndroid className="text-2xl text-blue-600" />
      </div>

      <div className="flex items-center gap-6">
        {liens.map(lien => (
          <Link 
            key={lien.label} 
            href={lien.lien}
            className={getLinkClasses(lien.lien)}
          >
            {lien.label}
          </Link>
        ))}
      </div>

      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  )
}

export default Navbar