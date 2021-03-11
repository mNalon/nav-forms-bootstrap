import Link from 'next/link'

import { Breadcrumb, Form, Button } from 'react-bootstrap'

import AppNavBar from '../../components/app-nav-bar'

const Form1 = (id) => (
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
 
export default () => (
  <AppNavBar>
    <Breadcrumb>
      <Link href="/form1" passHref>
        <Breadcrumb.Item as="a">Form1</Breadcrumb.Item>
      </Link>
      <Breadcrumb.Item active>Create</Breadcrumb.Item>
    </Breadcrumb>

    <Form1 />
  </AppNavBar>
)