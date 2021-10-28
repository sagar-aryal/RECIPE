import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
