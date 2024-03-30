import { Route, Routes} from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Project from "./Routes/Project/Project";
import ContactPage from "./Routes/Contact/contact";
const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Route>
      <Route path="/"></Route>
    </Routes>
  )
}

export default App;
