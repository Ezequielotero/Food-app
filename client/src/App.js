import "./App.css";
import Home from "../src/Components/Home/Home";
import Navbar from "../src/Components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Page from "../src/Components/Page2/Page";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/hola">
        <Navbar></Navbar>
      </Route>
      <Route path="/hola">
        <Page></Page>
      </Route>
    </div>
  );
}

export default App;
