import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/NavBar";


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative">
        <NavBar />
      </div>
    </BrowserRouter>
  )
}

export default App
