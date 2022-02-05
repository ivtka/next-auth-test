import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthentifacted user" });
  } else {
    res.status(200).json({ message: "Success", session });
  }
};
