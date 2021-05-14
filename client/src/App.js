import "./App.css";
import Home from "../src/Components/Home/Home";
import Navbar from "../src/Components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Page from "../src/Components/Page2/Page";
import Detail from "../src/Components/Detail/Detail";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/hola">
        <Navbar></Navbar>
      </Route>
      <Route path="/post">
        <Navbar></Navbar>
      </Route>
      <Route exact path="/hola">
        <Page></Page>
      </Route>
      <Route path="/detail">
        <Detail></Detail>
      </Route>
      <Route exact path="/post">
      <Post></Post>
      </Route>
    </div>
  );
}

export default App;
