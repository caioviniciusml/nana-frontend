import { z } from "zod/v4"
import { useQuery } from "@tanstack/react-query";
import type { GetCribResponse } from "./types/get-crib-response";

export const cribIdSchema = z.uuidv4()

export function useCrib(cribId: string) {
    return useQuery({
        queryKey: ["crib", cribId],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${cribId}`);
            const crib: GetCribResponse = await response.json();

            return crib;
        },
        enabled: cribIdSchema.safeParse(cribId).success
    });
}
