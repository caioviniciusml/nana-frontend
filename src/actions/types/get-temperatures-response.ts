import { z } from 'zod/v4'

export const getTemperatureResponseSchema = z.array(
    z.object({
        id: z.number(),
        temperature: z.number(),
        createdAt: z.date(),
    })
)

export type GetTemperaturesResponse = z.infer<typeof getTemperatureResponseSchema>
