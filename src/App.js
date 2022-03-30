import logo from "./logo.svg";
import "./App.css";
import Ex1 from "./Example/Ex1";
import Ex2 from "./Example/Ex2";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListUser from "./User/ListUser";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import DetailUser from "./User/DetailUser";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Ex1/> */}
          {/* <Ex2/> */}
          {/* <ListTodo /> */}
          {/* <ListUser/> */}
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <Ex2 />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;

