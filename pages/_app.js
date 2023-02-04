import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { useRouter } from 'next/router';
import { Layout, HeadPage, Header, Footer, CheckedFound, LoadingPage } from '../components';
import store from '../redux-toolkit/store/store';
import AOS from "aos";
import "aos/dist/aos.css";
import '../public/icomoon/icons.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {

  const router                        = useRouter();

  useEffect(() =>{
    
    import ('bootstrap/dist/js/bootstrap');

    AOS.init();
    AOS.refresh();

  });

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <HeadPage namePage='treasure-deal' />
              <CheckedFound />
              <Header />
              <LoadingPage />
              <div className="main-body position-relative">
                <Component {...pageProps} />
              </div>
              <Footer />
            </Layout>
        </PersistGate>
    </Provider>
  )
}

export default MyApp
