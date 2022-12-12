import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home";
import Skills from "./Components/Pages/Skills/Skills";
import Testing from "./Components/Pages/Testing";

function App() {
  
  return (
      <div className="App">
    {/* // <BrowserRouter> */}

        <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        
        {/* <Home/> */}
        </Router>
    {/* </BrowserRouter> */}

      </div>
  );
}

export default App;
