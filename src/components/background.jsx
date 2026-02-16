import React, { useEffect } from "react";
import "../pages/App.css"; 

function Back() {
  useEffect(() => {
  document.body.style.overflow = "hidden";
}, []);
  return (
    <div className="app">
    </div>
    )
}

export default Back;