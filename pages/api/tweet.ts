import type { NextApiRequest, NextApiResponse } from "next";
import Tweet from "../../model/tweet";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweet[]>
) {
  res.status(200).json([
    {
      id: 1,
      user: "Je12emy",
      text: "Hello world",
      likes: 2,
    },
    {
      id: 2,
      user: "Je12emy",
      text: "Another tweet",
      likes: 0,
    },
  ]);
}
