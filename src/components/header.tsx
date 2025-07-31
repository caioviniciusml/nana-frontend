'use client'
import Link from "next/link"
import { Bell, House } from "lucide-react"
import { useParams } from "next/navigation";

export function Header() {
  const { cribId } = useParams<{ cribId: string }>();

  return (
    <header className="max-w-screen-xl w-full flex justify-between items-center text-primary">
      <Link className="text-4xl font-bold" href={'/'}>
        NANA
      </Link>
      {cribId && (
        <nav className="flex gap-4 sm:gap-10">
          <Link className="p-2 hover:text-snow hover:bg-primary active:text-snow active:bg-primary rounded-lg" href={`/${cribId}`} title="Home">
            <House />
          </Link>
          <Link className="p-2 hover:text-snow hover:bg-primary active:text-snow active:bg-primary rounded-lg" href={`/${cribId}/notifications`} title="Notifications">
            <Bell />
          </Link>
        </nav>
      )}
    </header>
  )
}