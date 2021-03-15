import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PropTypes from 'prop-types'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object
}

export default MyApp
