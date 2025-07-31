import { useQuery } from '@tanstack/react-query'
import type { GetTemperaturesResponse } from '@/actions/types/get-temperatures-response'

export function useTemperatures(cribId: string) {
    return useQuery({
        queryKey: ["temperatures"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}/temperatures`)
            const temperatures: GetTemperaturesResponse = await response.json()

            return temperatures
        },
        refetchInterval: 1000
    })
}
