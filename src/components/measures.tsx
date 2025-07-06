'use client'

export function Measures() {
  return (
    <section className="grid grid-cols-1 gap-5">
      <h2 className="text-2xl text-primary font-bold">MEASURES</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-between font-medium">
        <div className="max-w-60 lg:w-full grid grid-cols-1 gap-2 text-third">
          <h3 className="text-base sm:text-lg">Temperature</h3>
          <span className="text-4xl sm:text-5xl text-caution">32.4 °C</span>
        </div>
        <div className="max-w-60 lg:w-full grid grid-cols-1 gap-2 text-third">
          <h3 className="text-base sm:text-lg">Movement</h3>
          <span className="text-4xl sm:text-5xl text-safe">Detected</span>
        </div>
        <div className="max-w-60 lg:w-full grid grid-cols-1 gap-2 text-third">
          <h3 className="text-base sm:text-lg">Noise Level</h3>
          <span className="text-4xl sm:text-5xl text-failed">Loud</span>
        </div>
      </div>
    </section>
  )
}