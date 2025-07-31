'use client'
import { NotificationsList } from "@/components/notifications-list";
import { useParams } from "next/navigation";

export default function Notifications() {
  const { cribId } = useParams<{ cribId: string }>();

  return (
    <main className="pt-5 sm:pt-10 max-w-screen-xl w-full flex flex-col gap-10">
      <NotificationsList cribId={cribId} />
    </main>
  );
}