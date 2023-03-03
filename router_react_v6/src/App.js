import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            {/* Home */}
          <Route path="/" element={<Home />} />
          {/* About */}  
          <Route path="/about" element={<About />} />
          {/* Contact */}
          <Route path="/Contact" element={<Contact />}/>
          <Route path="*" element={<Error />}/>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
