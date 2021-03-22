import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Breadcrumb, Form, Button } from 'react-bootstrap'
import fetch from 'axios'

import AppNavBar from '../../components/app-nav-bar'

const CreateForm = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const sendForm = () => {
    fetch.post('/api/form1', {
      name, description
    })
      .then(({ data }) => {
        alert('Dados salvos com sucesso!')
        router.push(`/form1/${data.id}`)
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

export default function Create () {
  return (
    <AppNavBar>
      <Breadcrumb>
        <Link href="/form1" passHref>
          <Breadcrumb.Item as="a">Form1</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>Create</Breadcrumb.Item>
      </Breadcrumb>

      <CreateForm />
    </AppNavBar>
  )
}
