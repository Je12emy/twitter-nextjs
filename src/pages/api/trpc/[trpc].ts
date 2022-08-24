import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../backend/router";

export default createNextApiHandler({
  router: appRouter
});
