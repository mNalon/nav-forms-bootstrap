import fetch from 'axios'
import useSWR from 'swr'
import { useState, useEffect } from 'react'

import Link from 'next/link'

import { Alert, Breadcrumb, Form, Button } from 'react-bootstrap'

import PropTypes from 'prop-types'

import AppNavBar from '../../components/app-nav-bar'

const EditForm = ({
  id,
  name: initialName,
  description: initialDescription
}) => {
  const [name, setName] = useState(initialName)
  const [description, setDescription] = useState(initialDescription)

  useEffect(() => {
    setName(initialName)
    setDescription(initialDescription)
  }, [
    initialName,
    initialDescription
  ])

  const sendForm = () => {
    fetch.put(`/api/form1/${id}`, {
      name, description
    })
      .then(() => {
        alert('Dados salvos com sucesso!')
      })
      .catch((err) => {
        console.error(err)
        alert('Ocorreu um erro!')
      })
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={sendForm}>
        Salvar
      </Button>
    </Form>
  )
}

EditForm.propTypes = {
  id: PropTypes.id,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

const loadItem = (id) => {
  const { data, error } = useSWR(`/api/form1/${id}`, fetch)
  if (error) return <Alert variant="danger">Ops! Ocorreu um erro :(</Alert>
  if (!data) return <Alert variant="light">Carregando...</Alert>

  const {
    data: item
  } = data

  return <EditForm {...item} />
}

function Edit ({ id }) {
  return (
      <AppNavBar>
        <Breadcrumb>
          <Link href="/form1" passHref>
            <Breadcrumb.Item as="a">Form1</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>{ id }</Breadcrumb.Item>
        </Breadcrumb>
        {loadItem(id)}
      </AppNavBar>
  )
}

Edit.propTypes = {
  id: PropTypes.number.isRequired
}

Edit.getInitialProps = (ctx) => {
  return { id: ctx.query.id }
}

export default Edit
