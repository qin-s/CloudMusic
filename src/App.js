import React from 'react';
import './App.css';
import {
    Route,
    Switch,
} from "react-router-dom";
import Login from "./views/Login"
import Index from "./views/Index";
function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/"} component={Index}></Route>
        </Switch>

    </div>
  );
}

export default App;
