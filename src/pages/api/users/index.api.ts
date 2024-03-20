// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   user: string;
//   password: String;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method !== 'POST'){
  return res.status(405)
}

 return res.status(200).json(req.body)
}