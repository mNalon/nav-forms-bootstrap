import Link from 'next/link'

import { Breadcrumb, Form, Button } from 'react-bootstrap'

import AppNavBar from '../../components/app-nav-bar'

const EditForm = (id) => (
  <Form>
    <Form.Group>
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" defaultValue="loremIpsum loremIpsum" />
    </Form.Group>

    <Form.Group>
      <Form.Label>Descrição</Form.Label>
      <Form.Control type="text" defaultValue="loremIpsum loremIpsumloremIpsum loremIpsum" />
    </Form.Group>

    <Button variant="primary">
      Salvar
    </Button>
  </Form>
)
 
const Edit = function ({ id }) {
  return (
      <AppNavBar>
        <Breadcrumb>
          <Link href="/form1" passHref>
            <Breadcrumb.Item as="a">Form1</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>{ id }</Breadcrumb.Item>
        </Breadcrumb>
    
        <EditForm />
      </AppNavBar>
    )
}


Edit.getInitialProps = (ctx) => {
  return {id: ctx.query.id}
}

export default Edit