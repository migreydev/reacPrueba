import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export default function Menu(){
  const [value, setValue] = useState();


  function handleChange(e){
    setValue(e.target.value)
  }

    return <>
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Task</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
           <Link to="/addTask">Crear tarea</Link> 
        </li>
        <li className="nav-item">
            <Link to="/tasks">Tareas</Link>
        </li>
      </ul>
    </div>
  </nav>
    <div>
        <Outlet></Outlet>
    </div>  
    </>
}