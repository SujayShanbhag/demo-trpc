import {procedure,router} from '../trpc'
import {z} from 'zod'

export const objectRouter= router({
    check: procedure.query(()=> {
        return {
            result: 'it exists',
        }
    })
})

export type Router = typeof objectRouter;