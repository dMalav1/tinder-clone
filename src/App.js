import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";

function App() {
  return (
    //bem class naming convention
    <div className="app">
      {/*<h1>Lets build the mern tinder clone</h1>*/}

      {/*Header*/}
      <Header />

      {/*TinderCards*/}
      <TinderCards/>
      {/*SwipeButtons*/}

    </div>
  );
}

export default App;
