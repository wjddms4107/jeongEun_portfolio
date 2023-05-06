import { NextApiRequest, NextApiResponse } from "next";
import client from '../../libs/server/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const projects = await client.project.findMany();

  res.json({
    ok: true,
    data: projects,
  });
}
