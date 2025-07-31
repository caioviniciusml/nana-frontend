'use client'
import { Baby } from "lucide-react";
import { SensorsStatus } from "@/components/sensors-status";
import { Measures } from "@/components/measures";
import { useCrib } from "@/actions/use-crib";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const { cribId } = useParams<{ cribId: string }>();
  const { data, isLoading } = useCrib(cribId)

  useEffect(() => {
    if (!isLoading && (!cribId || !data?.cribName)) {
      router.push('/')
    }
  }, [cribId, data, isLoading, router])

  return (
    <main className="pt-5 sm:pt-10 max-w-screen-xl w-full">
      {(!isLoading && data?.cribName) && (
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 items-center text-primary">
            <div className="p-3 bg-primary rounded-full">
              <Baby className="text-soft" />
            </div>
            <h1 className="text-xl sm:text-3xl font-bold">{data?.cribName.toUpperCase()}</h1>
          </div>
          <SensorsStatus cribId={cribId} />
          <Measures cribId={cribId} />
        </div>
      )}
    </main>
  )
}