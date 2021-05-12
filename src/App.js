import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY } from "./constants/index";
//Components
import Header from "./Components/Header";
import Image from "./Components/Image";

function App() {
  const [state, setState] = useState({});
  console.log(state);
  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <div className="App">
      <Header />
      {state && <Image state={state} />}
    </div>
  );
}

export default App;
