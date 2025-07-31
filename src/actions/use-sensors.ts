import { useQuery } from '@tanstack/react-query'
import type { GetSensorsResponse } from '@/actions/types/get-sensors-response'

export function useSensors(cribId: string) {
    return useQuery({
        queryKey: ["movement"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}/sensors`)
            const sensorsStatus: GetSensorsResponse = await response.json()

            return sensorsStatus
        },
        refetchInterval: 1000
    })
}
