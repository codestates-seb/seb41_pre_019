import { Provider } from "react-redux";

import store from "../redux/index";
import Nav from "../components/Nav";
import "../styles/globals.css";



export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}
