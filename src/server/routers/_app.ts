import { z } from 'zod';
import { procedure, router } from '../trpc';
import { personRouter } from './person';
import {objectRouter} from './object'
import { mergeRouters } from '../trpc';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
    person : personRouter,
    object: objectRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;