import '../styles/globals.css'
import AppContext from '../Component/AppContext'
import {useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [pages, setPage] = useState([])
 
  return (
    <AppContext.Provider
        value={{
          state: {
            article: pages
          },
          setPage
        }}>
      <Component {...pageProps} />
      </AppContext.Provider>
      );
}

export default MyApp
