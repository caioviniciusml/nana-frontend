import { z } from 'zod/v4'

export const getCribResponseSchema = z.object({
    cribId: z.string().length(36),
    cribName: z.string().min(4).max(16),
    createAt: z.date()
})

export type GetCribResponse = z.infer<typeof getCribResponseSchema>
