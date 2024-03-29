import { Provider } from "react-redux";
import Footer from "../components/Layout/Footer";
import store from "../redux/index";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <div class="Container" style={{ display: "flex" }}>
        <div style={{ width: "10%" }}></div>
        <Sidebar></Sidebar>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}
