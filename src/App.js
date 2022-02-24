import React, {useEffect} from "react"
import './Style.css';
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Home from "./Home"
import { useContextGlobal } from "./Context";

function App() {

  const {getPokemon, isLoading, displayPokemons} = useContextGlobal()

  const body = document.querySelector("body")

  displayPokemons ?  body.style.overflow = "" : body.style.overflow = "hidden"

  if (isLoading) {
    return (
      <div>Loading pokemon</div>
    )
  }

  else {

  return (
    <>
      <Nav />

      <div className="container">

        <Sidebar />
        <Home />

      </div>

    </>
  );
  }
}

export default App;
