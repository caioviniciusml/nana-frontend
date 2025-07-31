import { useQuery } from '@tanstack/react-query'
import type { GetNoisesResponse } from '@/actions/types/get-noises-response'

export function useNoises(cribId: string) {
    return useQuery({
        queryKey: ["noises"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}/noises`)
            const noises: GetNoisesResponse = await response.json()

            return noises
        },
        refetchInterval: 1000
    })
}
