import { NextApiRequest, NextApiResponse } from "next";
import client from '../../libs/server/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const projects = await client.project.findMany();

  const newData = projects.map((project) => {
    const srcArray = (project.src as unknown as string).split(',');
    const newArray = srcArray.map((src:string) => src.replace(/^"(.*)"$/, '$1'));

    return {
      ...project,
      src: newArray ,
    };
  });

  res.json({
    ok: true,
    data: newData,
  });
}
