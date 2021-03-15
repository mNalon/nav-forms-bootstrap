import Link from 'next/link'

import { Breadcrumb, Form, Button } from 'react-bootstrap'

import AppNavBar from '../../components/app-nav-bar'

const CreateForm = () => (
  <Form>
    <Form.Group>
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group>
      <Form.Label>Descrição</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Button variant="primary">
      Salvar
    </Button>
  </Form>
)

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
