'use client'
import { useCrib } from "@/actions/use-crib"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Baby, Ellipsis, Pen, Copy, Trash } from "lucide-react"

interface CribItemProps {
  cribId: string
  deleteFn: () => void
}

export function CribItem({ cribId, deleteFn }: CribItemProps) {
  const { data } = useCrib(cribId)

  return (
    <div className="p-5 w-full flex justify-between bg-gradient-to-t from-primary to-80% to-secondary rounded-lg shadow-lg hover:scale-105 duration-300">
      <Link className="w-full flex items-center gap-2 sm:gap-5" href={`/${data?.cribId}`}>
        <div className="p-2 bg-soft rounded-full">
          <Baby className="text-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white text-lg sm:text-2xl font-bold">{data?.cribName}</span>
          <span className="text-third text-[8px] sm:text-xs font-bold">ID: {data?.cribId}</span>
        </div>
      </Link>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="focus:outline-none cursor-pointer text-soft">
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-primary font-medium border-none">
          <DropdownMenuItem className="flex items-center gap-2 text-xs sm:text-sm focus:text-white focus:bg-primary">
            Rename
            <Pen className="size-3 sm:size-4 text-current" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-xs sm:text-sm focus:text-white focus:bg-primary"
            onClick={() => navigator.clipboard.writeText(data ? data?.cribId : '')}>
            Copy ID
            <Copy className="size-3 sm:size-4 text-current" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-xs sm:text-sm text-red-500 focus:text-white focus:bg-red-500" onClick={deleteFn}>
            Delete
            <Trash className="size-3 sm:size-4 text-current" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}