let form1Items = Array(30).fill()

form1Items = form1Items.map(
  () => ({
    id: parseInt(Math.random(0, 99999) * 100),
    name: 'loremIpsum loremIpsum',
    description: 'loremIpsum loremIpsumloremIpsum loremIpsum'
  })
)

const getAll = () => form1Items

const updateById = (id, item) => {
  const index = form1Items.findIndex((i) => i.id === id)
  form1Items.splice(index, 1, item)
  return item
}

const getById = (id) => form1Items.find((item) => item.id === id)

const deleteById = (id) => {
  const index = form1Items.findIndex((item) => item.id === id)
  const [deletedItem] = form1Items.splice(index, 1)
  return deletedItem
}

const add = (item) => {
  const id = parseInt(Math.random(0, 99999) * 100)
  const createdItem = {
    id,
    ...item
  }

  form1Items.push(createdItem)
  return createdItem
}

export {
  getAll,
  updateById,
  getById,
  deleteById,
  add
}
