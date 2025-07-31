'use client'
import {
    Thermometer,
    ThermometerSnowflake,
    ThermometerSun,
    Activity,
    AudioLines,
    Volume,
    Volume2
} from "lucide-react";
import { useNotifications } from "@/actions/use-notifications";

interface NotificationsListProps {
    cribId: string
}

const notificationsIconMap = {
    temp: <Thermometer className="text-current" />,
    warm: <ThermometerSun className="text-current" />,
    cold: <ThermometerSnowflake className="text-current" />,
    movement: <Activity className="text-current" />,
    noise: <AudioLines className="text-current" />,
    noLoud: <Volume className="text-current" />,
    loud: <Volume2 className="text-current" />
}

export function NotificationsList({ cribId }: NotificationsListProps) {
    const { data } = useNotifications(cribId);

    return (
        <section className="grid grid-cols-1 gap-5">
            <h2 className="text-2xl text-primary font-bold">NOTIFICATIONS</h2>
            <div className="flex flex-col gap-10 font-medium">
                {data?.map((notification) => (
                    <div key={notification.id} className="flex flex-col gap-10">
                        <div className="w-full flex justify-between items-center">
                            <span className="text-base text-third">{notification.type}</span>
                            <span className="text-xs text-gray-500">{new Date(notification.createdAt).toLocaleString("pt-br")}</span>
                        </div>
                        <hr className="border-third" />
                    </div>
                ))}
            </div>
        </section>
    )
}