import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Components/Pages/Home";

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
