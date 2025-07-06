'use client'
import Image from "next/image"
import Link from "next/link"
import { Camera, Bell } from "lucide-react"

export function Header() {
  return (
    <header className="max-w-screen-xl w-full flex justify-between items-center text-primary">
      <Link className="flex gap-2" href={'/'}>
        <Image
          src={'/logo.svg'}
          width={32}
          height={32}
          alt="NANA Logo">
        </Image>
        <h1 className="text-4xl font-bold">NANA</h1>
      </Link>
      <nav className="flex gap-5 sm:gap-10">
        <Link className="p-2 hover:text-bg hover:bg-primary active:text-bg active:bg-primary rounded-lg" href={'/gallery'} title="Gallery">
          <Camera />
        </Link>
        <Link className="p-2 hover:text-bg hover:bg-primary active:text-bg active:bg-primary rounded-lg" href={'/notifications'} title="Notifications">
          <Bell />
        </Link>
      </nav>
    </header>
  )
}