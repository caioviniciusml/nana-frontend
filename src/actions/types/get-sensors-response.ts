import { z } from 'zod/v4'

export const getSensorsResponseSchema = z.object({
    id: z.number(),
    cribId: z.string().length(36),
    tempSensorStatus: z.boolean(),
    movSensorStatus: z.boolean(),
    noiseSensorStatus: z.boolean(),
    createdAt: z.date(),
})

export type GetSensorsResponse = z.infer<typeof getSensorsResponseSchema>
