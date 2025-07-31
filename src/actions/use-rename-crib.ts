import { z } from "zod/v4"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { GetCribResponse } from "./types/get-crib-response";

export const cribNameSchema = z.string().min(4).max(20)

export function useRenameCrib(cribId: string) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (cribName: string) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cribName)
            });

            const updatedCrib: GetCribResponse = await response.json();

            return updatedCrib;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["crib", cribId] })
        }
    });
}
