// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAll, add } from './form1-items'

export default (req, res) => {
  if(req.method === 'POST') {
    const createdItem = add(req.body)
    return res.status(200).json(createdItem)
  }

  res.status(200).json({items: getAll()})
}
