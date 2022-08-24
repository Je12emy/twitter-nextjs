import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { tweetRouter } from "../../../routers/tweetRouter";

export function createRouter() {
  return trpc.router();
}
const router = createRouter().merge('tweet.', tweetRouter);

export const appRouter = router;
export type AppRouter = typeof router;

export default trpcNext.createNextApiHandler({
  router,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", error);
    }
  },
});
