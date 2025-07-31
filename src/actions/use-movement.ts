import { useQuery } from '@tanstack/react-query'
import type { GetMovementResponse } from '@/actions/types/get-movement-response'

export function useMovement(cribId: string) {
    return useQuery({
        queryKey: ["movement"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}/movement`)
            const movement: GetMovementResponse = await response.json()

            return movement
        },
        refetchInterval: 1000
    })
}
