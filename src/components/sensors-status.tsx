'use client'
import { Thermometer, Activity, Volume2 } from "lucide-react";

export function SensorsStatus() {
  return (
    <section className="grid grid-cols-1 gap-5">
      <h2 className="text-2xl text-primary font-bold">SENSORS</h2>
      <div className="flex flex-col lg:flex-row gap-5 justify-between font-medium">
        <div className="p-5 flex items-center gap-5 text-secondary bg-soft rounded-xl shadow-md">
          <div className="p-2 rounded-full bg-secondary" >
            <Thermometer className="text-soft" />
          </div>
          <span>Temperature Sensor</span>
          <div className="ml-auto px-2 py-1 flex items-center gap-1 bg-sucessful-bg rounded-md">
            <span className="w-2 h-2 rounded-full bg-sucessful"></span>
            <span className="text-xs text-sucessful">Active</span>
          </div>
        </div>
        <div className="p-5 flex items-center gap-5 text-secondary bg-soft rounded-xl shadow-md">
          <div className="p-2 rounded-full bg-secondary" >
            <Activity className="text-soft" />
          </div>
          <span>Movement Sensor</span>
          <div className="ml-auto px-2 py-1 flex items-center gap-1 bg-sucessful-bg rounded-md">
            <span className="w-2 h-2 rounded-full bg-sucessful"></span>
            <span className="text-xs text-sucessful">Active</span>
          </div>
        </div>
        <div className="p-5 flex items-center gap-5 text-secondary bg-soft rounded-xl shadow-md">
          <div className="p-2 rounded-full bg-secondary">
            <Volume2 className="text-soft" />
          </div>
          <span>Noise Sensor</span>
          <div className="ml-auto px-2 py-1 flex items-center gap-1 bg-failed-bg rounded-md">
            <span className="w-2 h-2 rounded-full bg-failed"></span>
            <span className="text-xs text-failed">Inactive</span>
          </div>
        </div>
      </div>
    </section>
  )
}