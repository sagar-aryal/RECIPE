import "./App.css";
import { HashRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
