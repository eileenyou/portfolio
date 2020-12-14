import React from "react";
import Resume from '../resume.pdf';
import Routes from '../appRoutes';
import "./Nav.css";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="name" onClick={() => window.location=Routes.home}>
                <h1 className="e1">e</h1>
                <h1>il</h1>
                <h1 className="e2">e</h1>
                <h1 className="e3">e</h1>
                <h1>n</h1>
            </div>
            <div className="menu">
                <h2><a href={Routes.home}>about</a></h2>
                <h2>/</h2>
                <h2><a href={Routes.projects}>projects</a></h2>
                <h2>/</h2>
                <h2><a href={Resume} target = "_blank">resume</a></h2>
            </div>
        </div>
    );
  };
  
  export default Nav;