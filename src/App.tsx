import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative">
        <NavBar />
        <Landing />
      </div>
    </BrowserRouter>
  )
}

export default App
