import { z } from 'zod';
import { procedure, router } from '../trpc';

export const personRouter = router({
  hello: procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
      }),
    )
    .query((opts) => {
      return {
        hello: `hello ${opts.input.firstName} ${opts.input.lastName}`,
      };
    }),
    
});


// export type definition of API
export type Router = typeof personRouter;