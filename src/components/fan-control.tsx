'use client'
import { useState } from "react"
import { Fan } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export function FanControl() {
  const [autoMode, setAutoMode] = useState<boolean>(false)
  const [fanSpeed, setFanSpeed] = useState<number>(120)

  return (
    <section className="grid grid-cols-1 gap-5">
      <h2 className="text-2xl text-primary font-bold">FAN</h2>
      <div className="px-5 py-10 flex flex-col md:flex-row gap-10 justify-between items-center text-secondary font-medium bg-soft rounded-xl shadow-md">
        <div className="w-full flex items-center gap-2">
          <Fan />
          <span className="text-xl">Auto Mode</span>
          <Switch checked={autoMode} onCheckedChange={setAutoMode} />
        </div>
        <div className="w-full grid grid-cols-1 gap-2">
          <h3 className="text-xl">Speed</h3>
          <div className="flex gap-1 text-soft">
            <button
              className={`w-full py-2 rounded-lg ${fanSpeed === 0 ? 'bg-primary' : 'bg-third'} ${autoMode ? 'hover:cursor-not-allowed opacity-60' : 'hover:cursor-pointer'}`}
              onClick={() => setFanSpeed(0)}
              disabled={autoMode}>I</button>
            <button
              className={`w-full py-2 rounded-lg ${fanSpeed === 120 ? 'bg-primary' : 'bg-third'} ${autoMode ? 'hover:cursor-not-allowed opacity-60' : 'hover:cursor-pointer'}`}
              onClick={() => setFanSpeed(120)}
              disabled={autoMode}>II</button>
            <button
              className={`w-full py-2 rounded-lg ${fanSpeed === 255 ? 'bg-primary' : 'bg-third'} ${autoMode ? 'hover:cursor-not-allowed opacity-60' : 'hover:cursor-pointer'}`}
              onClick={() => setFanSpeed(255)}
              disabled={autoMode}>III</button>
          </div>
        </div>
      </div>
    </section>
  )
}