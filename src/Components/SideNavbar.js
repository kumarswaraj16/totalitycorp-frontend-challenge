import React from "react";
import "../Styles/SideNavbar.css";
export const SideNavbar = () => {
  const closeSideNavbar = () => {
    document.getElementById("mySidenav").style.width = "0px";
  };
  return (
    <div id="mySidenav" className="sidenav">
      <a href="/" className="closebtn" onClick={closeSideNavbar}>
        &times;
      </a>
      <a href="/">Wild Heart</a>
      <a href="/">Dead Space</a>
      <a href="/">NFS Unbound</a>
      <a href="/">The Sims 4</a>
      <a href="/">FIFA23</a>
      <a href="/">Apex Legends</a>
    </div>
  );
};
