import Link from 'next/link'

import { 
  Breadcrumb,
  Button,
  Table
} from 'react-bootstrap'

import AppNavBar from '../../components/app-nav-bar'

const form1Items = Array(100).fill({
  id: '12345678',
  name: 'loremIpsum loremIpsum',
  description: 'loremIpsum loremIpsumloremIpsum loremIpsum'
})

const ListItemRow = ({
  id,
  name,
  description
}) => (
  <Link href={`/form1/${id}`} passHref>
    <tr as="a" role="button">
      <td>{ id }</td>
      <td>{ name }</td>
      <td>{ description }</td>
    </tr>
  </Link>
)

const ListItems = ({
  items = []
}) => {

  const rowItems = items.map((item) => (<ListItemRow {...item} key={item.id} />))

  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {rowItems}
      </tbody>
    </Table>
  )
} 

export default () => (
  <AppNavBar>
    <Breadcrumb>
      <Breadcrumb.Item active>Form1</Breadcrumb.Item>
    </Breadcrumb>
    <ListItems items={form1Items} />
    <Link href="/form1/create" passHref>
      <Button as="a" variant="secondary" size="lg" block className="fixed-bottom">
        Create
      </Button>
    </Link>
  </AppNavBar>
)