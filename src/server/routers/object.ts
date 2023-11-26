import {procedure,router} from '../trpc'
import {z} from 'zod'

export const objectRouter= router({
    check: procedure.query(()=> {
        return {
            result: 'it exists',
        }
    }),
    create: procedure
    .input(
        z.object({
          objectName: z.string(),
          quantity: z.number(),
        }),
      )
    .mutation((opts) => {
        return {
            result :`Created ${opts.input.quantity} number of ${opts.input.objectName} objects`,
        }
    })
})

export type Router = typeof objectRouter;