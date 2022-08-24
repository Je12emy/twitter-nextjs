import Tweet from "../model/tweet";
import { createRouter } from "./index";

export const tweetRouter = createRouter().query("all", {
  resolve() {
    const tweets: Tweet[] = [
      {
        id: 1,
        user: "Je12emy",
        text: "Hello world",
        likes: 2,
      },
      {
        id: 2,
        user: "Je12emy",
        text: "TRPC + Nextjs + Tailwind = T3 App",
        likes: 0,
      },
    ];
    return tweets;
  },
});
