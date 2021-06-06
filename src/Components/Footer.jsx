import React from "react";

// # SHAPEAI Javascript and Reactjs BOOTCAMP
function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}
export default Footer;
