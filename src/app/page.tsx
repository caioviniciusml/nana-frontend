import { SensorsStatus } from "@/components/sensors-status";
import { Measures } from "@/components/measures";
import { FanControl } from "@/components/fan-control";

export default function Home() {
  return (
    <main className="pt-5 sm:pt-10 max-w-screen-xl w-full flex flex-col gap-10">
      <SensorsStatus />
      <Measures />
      <FanControl />
    </main>
  );
}
