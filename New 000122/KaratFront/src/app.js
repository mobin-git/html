import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import Leftcontents from "./layouts/LeftContents/leftcontents"
import Rightmenu from "./layouts/RightMenu/rightmenu"
import Window from "./layouts/window"
import Works from "./pages/works"
import Done from "./pages/done"
import Table from "./pages/table"
import Report from "./pages/report"
import About from "./pages/about"
import Page404 from "./pages/404/404"
import Register from "./pages/Register/register"
import Stopwatch from "./pages/Stopwatch/stopwatch"
import Login from "./pages/Login/login"

import {useStyles} from "./styles"
import "./style.css"


function App() {

  const style = useStyles()

  return(
    <div className={style.maincontainer}>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/login" component={Login}/>
          <PublicRoute path="/register" component={Register}/>
          <PrivateRoute path={"/"} render={() =>
            <div className={style.maincontainer}>
              <Rightmenu/>
              <div className={style.midpart}>
                <Window><Switch>
                  <Route exact path={"/Works"} component={Works} />
                  <Route exact path={"/Done"} component={Done} />
                  <Route exact path={"/Table"} component={Table} />
                  <Route exact path={"/Report"} component={Report} />
                  <Route exact path={"/About"} component={About} />
                  <Route exact path={"/stopwatch"} component={Stopwatch} />
                  <Route exact path={"/"} component={Works} />
                  <Route component={Page404}/>
                </Switch></Window>
              </div>
              <Leftcontents/>
            </div>
          }/>
        </Switch>
      </BrowserRouter>
    </div>
)}

const islogin=()=> !!localStorage.getItem("something");
// const islogin=()=> true;

const PublicRoute=({component ,...props})=>{
  return <Route {...props} render={(props)=>{
    if (islogin()) 
      return <Redirect to={"/"} />
    else{
      return React.createElement(component, props)
    } 
  }} />
}

const PrivateRoute=({render , ...props})=>{
  return <Route {...props} render={(props)=>{
    if (islogin()) return render(props);
    else return <Redirect to={"/login"} />
  }} />
}

export default App