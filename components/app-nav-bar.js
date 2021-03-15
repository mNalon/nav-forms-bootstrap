import Link from 'next/link'
import { useRouter } from 'next/router'

import { Navbar, Nav } from 'react-bootstrap'

import PropTypes from 'prop-types'

const APP_NAME = 'NavForm Bootstrap'

export default function AppNavBar ({ children }) {
  const router = useRouter()
  const basePath = router.pathname.split('/')[1]
  const activeKey = `/${basePath}`

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Link href="/" passHref>
          <Navbar.Brand as="a">
            {APP_NAME}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto" activeKey={activeKey}>
            <Link href="/form1" passHref>
              <Nav.Link as="a">
                 Form1
              </Nav.Link>
            </Link>
            <Link href="/form2" passHref>
              <Nav.Link as="a">
                 Form2
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      { children }
    </>
  )
}

AppNavBar.propTypes = {
  children: PropTypes.any
}
