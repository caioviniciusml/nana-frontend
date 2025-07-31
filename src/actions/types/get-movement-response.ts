import { z } from 'zod/v4'

export const getMovementResponseSchema = z.object({
    id: z.number(),
    movement: z.boolean(),
    createdAt: z.date(),
})

export type GetMovementResponse = z.infer<typeof getMovementResponseSchema>
