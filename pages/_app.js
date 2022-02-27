import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  // return (
  //   <Layout>
  //       <Component {...pageProps} />
  //   </Layout>
  // );
  return getLayout(<Component {...pageProps} />);
}

export default MyApp
