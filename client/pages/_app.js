import { Provider } from "react-redux";

import store from "../redux/index";
import Nav from "../components/Nav";
import "../styles/globals.css";
import QuestionContent from "./Questions/QuestionContent";




export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <div class = 'Container' style={{display: 'flex'}}>
      <div style={{width: '600px'}}></div>
        {/* <Sidebar></Sidebar> */}'
      <Component {...pageProps} />
      </div>
     
    </Provider>
  );
}
