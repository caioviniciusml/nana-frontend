import { z } from 'zod/v4'

export const getNoisesResponseSchema = z.array(
    z.object({
        id: z.number(),
        noise: z.number(),
        createdAt: z.date(),
    })
)

export type GetNoisesResponse = z.infer<typeof getNoisesResponseSchema>
