import "./App.css";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import Edituser from "./components/users/Edituser";
import User from "./components/users/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/users/add" Component={AddUser}/>
        <Route exact path="/users/edit/:id" Component={Edituser}/>
        <Route exact path="/users/:id" Component={User}/>
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
