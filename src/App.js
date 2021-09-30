import React from "react";
import './App.css';
import Start from "./Start";
import {Route} from "react-router-dom";

import Ranking from "./Ranking";
import Message from "./Message";
// import Spinner from "./Spinner";




function App(){
  const [name, setName] = React.useState("Dictionary");

  return (
    <div className="App" style = {{
      maxWidth : "350px",
      margin: "auto"}}>
        {/* <Spinner/> */}
      <Route path = "/" exact>
      <Start name = {name}/>
      </Route>

      <Route path = "/message" exact>
      <Message/>
      </Route>
      
      <Route path = "/ranking" exact>
      <Ranking/>
      </Route>
      
      

    </div>
  )
}

export default App;