import fetch from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import {
  Breadcrumb,
  Button,
  Table,
  Alert
} from 'react-bootstrap'

import AppNavBar from '../../components/app-nav-bar'

function ListItemRow ({
  id,
  name,
  description,
  onDeleteItem
}) {
  const onClick = (event) => {
    event.preventDefault()
    const shouldDelete = confirm('Tem certeza que deseja deletar esse item?')
    shouldDelete && fetch.delete(`/api/form1/${id}`)
      .then(() => onDeleteItem(id))
  }

  return (
    <Link href={`/form1/${id}`} passHref>
      <tr as="a" role="button">
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ description }</td>
        <td><Button variant="danger" onClick={onClick}>Deletar</Button></td>
      </tr>
    </Link>
  )
}

ListItemRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func
}

function ListItems ({ items }) {
  const [currentItems, setCurrentItems] = useState(items)

  useEffect(() => {
    setCurrentItems(items)
  }, [items])

  const removeItemById = (id) => {
    const indexToRemove = currentItems.findIndex((item) => item.id === id)
    setCurrentItems([
      ...currentItems.slice(0, indexToRemove),
      ...currentItems.slice(indexToRemove + 1)
    ])
  }

  const rowItems = currentItems.map(
    (item) => (
      <ListItemRow
        {...item}
        key={item.id}
        onDeleteItem={removeItemById}
      />
    )
  )

  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rowItems}
      </tbody>
    </Table>
  )
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired
}

const loadItems = () => {
  const { data, error } = useSWR('/api/form1', fetch)
  if (error) return <Alert variant="danger">Ops! Ocorreu um erro :(</Alert>
  if (!data) return <Alert variant="light">Carregando...</Alert>

  const {
    data: {
      items
    }
  } = data

  return <ListItems items={items} />
}

export default function List () {
  return (
    <AppNavBar>
      <Breadcrumb>
        <Breadcrumb.Item active>Form1</Breadcrumb.Item>
      </Breadcrumb>
      {loadItems()}
      <Link href="/form1/create" passHref>
        <Button as="a" variant="secondary" size="lg" block className="fixed-bottom">
          Create
        </Button>
      </Link>
    </AppNavBar>
  )
}
