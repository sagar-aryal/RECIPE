import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
