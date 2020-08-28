import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Aux from "./hoc/_aux";

function App() {
  return (
    <Aux>
      {/* <Header /> */}
      <Router>
        <Routes />
        {/* <Order /> */}
      </Router>
      {/* <Footer /> */}
    </Aux>
  );
}

export default App;
