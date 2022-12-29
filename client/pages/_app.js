import { Provider } from "react-redux";

import store from "../redux/index";
import Nav from "../components/Nav";
import "../styles/globals.css";
import WriteAnswer from "../components/AnswerLayout/WriteAnswer";




export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <WriteAnswer/>
      <Component {...pageProps} />
    </Provider>
  );
}
