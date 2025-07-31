'use client'
import { Thermometer, Activity, AudioLines } from "lucide-react";
import { useSensors } from "@/actions/use-sensors";

interface SensorsStatusProps {
  cribId: string
}

export function SensorsStatus({ cribId }: SensorsStatusProps) {
  const { data } = useSensors(cribId);

  return (
    <section className="grid grid-cols-1 gap-5">
      <h2 className="text-2xl text-primary font-bold">SENSORS</h2>
      <div className="flex flex-col lg:flex-row gap-5 justify-between font-medium">
        <div className="p-5 flex items-center gap-5 text-secondary bg-soft rounded-lg shadow-md">
          <div className="p-2 rounded-full bg-current" >
            <Thermometer className="text-soft" />
          </div>
          <span>Temperature Sensor</span>
          <div
            data-temp-sensor={data?.tempSensorStatus}
            className="group ml-auto px-2 py-1 flex items-center gap-1 rounded-md data-[temp-sensor=true]:bg-sucessful-bg data-[temp-sensor=false]:bg-failed-bg">
            <span className="size-2 rounded-full group-data-[temp-sensor=true]:bg-sucessful group-data-[temp-sensor=false]:bg-failed" />
            <span className="text-xs group-data-[temp-sensor=true]:text-sucessful group-data-[temp-sensor=false]:text-failed">
              {data?.tempSensorStatus ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
        <div className="p-5 flex items-center gap-5 text-secondary bg-soft rounded-lg shadow-md">
          <div className="p-2 rounded-full bg-secondary" >
            <Activity className="text-soft" />
          </div>
          <span>Movement Sensor</span>
          <div
            data-mov-sensor={data && data.movSensorStatus}
            className="group ml-auto px-2 py-1 flex items-center gap-1 rounded-md data-[mov-sensor=true]:bg-sucessful-bg data-[mov-sensor=false]:bg-failed-bg">
            <span className="size-2 rounded-full group-data-[mov-sensor=true]:bg-sucessful group-data-[mov-sensor=false]:bg-failed" />
            <span className="text-xs group-data-[mov-sensor=true]:text-sucessful group-data-[mov-sensor=false]:text-failed">
              {data && data.movSensorStatus ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
        <div className="p-5 flex items-center gap-5 text-secondary bg-soft rounded-lg shadow-md">
          <div className="p-2 rounded-full bg-secondary">
            <AudioLines className="text-soft" />
          </div>
          <span>Noise Sensor</span>
          <div
            data-noise-sensor={data?.noiseSensorStatus}
            className="group ml-auto px-2 py-1 flex items-center gap-1 rounded-md data-[noise-sensor=true]:bg-sucessful-bg data-[noise-sensor=false]:bg-failed-bg">
            <span className="size-2 rounded-full group-data-[noise-sensor=true]:bg-sucessful group-data-[noise-sensor=false]:bg-failed" />
            <span className="text-xs group-data-[noise-sensor=true]:text-sucessful group-data-[noise-sensor=false]:text-failed">
              {data?.movSensorStatus ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
