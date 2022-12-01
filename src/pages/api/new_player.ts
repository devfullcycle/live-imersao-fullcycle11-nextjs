// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await axios.post('http://localhost:8000/players', {name: req.body.name})
  await res.revalidate('/players_isr_on_demand')
  //res.setHeader('stale-while-revalidate', '60')
  //stale while revalidate
  res.status(204)
}

//api/revalidate?pagina=players_isr_on_demand


//network

//http://google.com.br/api/

