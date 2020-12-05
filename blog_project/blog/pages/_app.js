import 'antd/dist/antd.css'
import '../styles/globals.css'
// globals.css 放在最下方，防止被覆盖


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
