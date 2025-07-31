import { z } from 'zod/v4'

export const getNotificationsResponseSchema = z.array(
    z.object({
        id: z.number(),
        cribId: z.string().length(36),
        type: z.string(),
        extra: z.string(),
        createdAt: z.date(),
    })
)

export type GetNotificationsResponse = z.infer<typeof getNotificationsResponseSchema>
