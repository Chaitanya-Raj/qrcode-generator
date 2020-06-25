import React, { useState, useEffect } from "react";
import QRCode from "qrcode-generator";
import "./App.css";

function App() {
  const [generated, setGenerated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(`
    ${firstName} ${lastName}
    ${email}
    https://github.com/${github}
    `);
  }, [firstName, lastName, email, github]);

  const generate = () => {
    let qr = QRCode(0, "L");
    qr.addData(result);
    qr.make();
    document.getElementById("placeHolder").innerHTML = qr.createImgTag(5, 10);
  };

  return (
    <>
      <div className="container">
        <div id="placeHolder"></div>

        {generated && (
          <div className="info">
            <p>
              {firstName} {lastName}
            </p>
            <p>{email}</p>
            <p>https://github.com/{github}</p>
          </div>
        )}

        {!generated && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setGenerated(true);
              generate();
            }}
          >
            <div className="name">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="github"
              id="github"
              placeholder="Github Username"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
            />
            <div id="button-container">
              <button
                type="reset"
                onClick={() => {
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setGithub("");
                }}
              >
                Cancel
              </button>
              <button type="submit">Create</button>
            </div>
          </form>
        )}
      </div>
      <button onClick={() => setGenerated(false)}>Edit</button>
      <button className="print">Print</button>
    </>
  );
}

export default App;
