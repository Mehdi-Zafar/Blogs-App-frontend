import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewBlog from "./components/NewBlog";
import Footer from "./components/Footer";
import ReadBlog from "./components/ReadBlog";
import UpdateBlog from "./components/UpdateBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/new-blog" element={<NewBlog/>}/>
          <Route path = "/:id" element={ <ReadBlog />} />
          <Route path="/update-blog" element={<UpdateBlog/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
