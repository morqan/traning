import React from "react";
import './app.css';
import TodoApp from "../../pages/todo-app/todo-app";
import Header from "../header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
       <Router>
           <div>
               <Header/>
               <Route path='/todo-app' component={TodoApp} />
           </div>
       </Router>
    )
}
export default App
