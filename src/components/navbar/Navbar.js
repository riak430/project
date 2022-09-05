import React from "react";
import top from "./style.module.css";
function Topbar() {
  // var header = document.querySelector(".myDIV");
  // var btns = header.getElementsByClassName("btn");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("active");
  //     if (current.length > 0) {
  //       current[0].className = current[0].className.replace(" active", "");
  //     }
  //     this.className += " active";
  //   });
  // }

  return (
    <div className={`${top.topbar} $top.myDIV}`}>
      <a href="#" className={`${top.active} $top.btn}`}>
        All Items
      </a>
      <a href="#">Food</a>
      <a href="#">Alcohol</a>
      <a href="#">Cold Drinks</a>
      <a href="#">Hot Drinks</a>
    </div>
  );
}

export default Topbar;
