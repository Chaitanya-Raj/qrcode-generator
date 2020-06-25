import React, { useState, useEffect } from "react";
import QRCode from "qrcode-generator";
import "./App.css";

function App() {
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    let qr = QRCode(0, "L");
    qr.addData("x");
    qr.make();
    document.getElementById("placeHolder").innerHTML = qr.createImgTag();
  }, [generated]);

  return (
    <div className="container">
      <div id="placeHolder"></div>
      <form>
        <input type="text" name="" id="" />
        <input type="email" name="" id="" />
        <input type="text" name="" id="" />
        <div id="button-container">
          <button type="reset" className="button">
            Cancel
          </button>
          <button type="submit" className="button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
