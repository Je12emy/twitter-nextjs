import * as trpc from "@trpc/server";
import { tweetRouter } from "./tweet";

export function createRouter() {
  return trpc.router();
}
const router = createRouter().merge('tweet.', tweetRouter);

export const appRouter = router;
export type AppRouter = typeof router;

