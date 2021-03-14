import { getById, updateById, deleteById } from './form1-items'

export default (req, res) => {
  const { id: idUrlParam } =  req.query

  const id = parseInt(idUrlParam)

  const item = getById(id)

  if(!item) {
    res.status(404).json({ message: 'Item não encontrado' })
    return
  }

  if (req.method === 'POST') {
    const {
      name: newName,
      description: newDescription
    } = req.body

    let updatedItem = updateById(id, {
      id,
      name: newName,
      description: newDescription
    })

    res.status(200).json(updatedItem)
    return
  }

  if (req.method === 'DELETE') {
    res.status(200).json(deleteById(id))
    return
  }

  res.status(200).json(item)
}
