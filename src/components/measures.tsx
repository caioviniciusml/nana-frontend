'use client'
import { useTemperatures } from "@/actions/use-temperatures"
import { useMovement } from "@/actions/use-movement"
import { useNoises } from "@/actions/use-noises"

interface MeasuresProps {
  cribId: string
}

export function Measures({ cribId }: MeasuresProps) {
  const { data: temperatures } = useTemperatures(cribId);
  const { data: movement } = useMovement(cribId);
  const { data: noises } = useNoises(cribId);

  return (
    <section className="grid grid-cols-1 gap-5">
      <h2 className="text-2xl text-primary font-bold">MEASURES</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-between font-medium">
        <div className="max-w-60 lg:w-full grid grid-cols-1 gap-2 text-third">
          <h3 className="text-base sm:text-lg">Temperature</h3>
          <span className="text-4xl sm:text-5xl text-caution">
            {temperatures && `${temperatures[temperatures.length - 1].temperature} °C`}
          </span>
        </div>
        <div className="max-w-60 lg:w-full grid grid-cols-1 gap-2 text-third">
          <h3 className="text-base sm:text-lg">Movement</h3>
          <span data-movement={movement?.movement} className="text-4xl sm:text-5xl data-[movement=true]:text-safe data-[movement=false]:text-failed">
            {movement?.movement ? "Detected" : "Undetected"}
          </span>
        </div>
        <div className="max-w-60 lg:w-full grid grid-cols-1 gap-2 text-third">
          <h3 className="text-base sm:text-lg">Noise Level</h3>
          <span className="text-4xl sm:text-5xl text-failed">
            {noises && `${noises[noises.length - 1].noise}`}
          </span>
        </div>
      </div>
    </section>
  )
}
