import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import About from "./Components/Pages/About/About";
// import Home from "./Components/Pages/Home";
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          {/* <Route path="/" element={<Home/> } /> */}
          <Route path="/skillz" element={<About/> } />
        </Routes>
      </Router> 
      {/* <Home/> */}
    </div>
  );
}

export default App;
