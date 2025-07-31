import { useQuery } from '@tanstack/react-query'
import type { GetNotificationsResponse } from '@/actions/types/get-notifications-response'

export function useNotifications(cribId: string) {
    return useQuery({
        queryKey: ["notifications"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}/notifications`)
            const notifications: GetNotificationsResponse = await response.json()

            return notifications
        },
        refetchInterval: 1000
    })
}
