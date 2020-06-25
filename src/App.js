import React, { useState, useEffect } from "react";
import QRCode from "qrcode-generator";
import "./App.css";

function App() {
  const [generated, setGenerated] = useState(false);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [github, setGithub] = useState("");
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    // setResult(`
    // ${firstName} ${lastName}
    // ${email}
    // https://github.com/${github}
    // `);
    setResult(data);
    // }, [firstName, lastName, email, github]);
  }, [data]);

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
            {/* <p>
              {firstName} {lastName}
            </p>
            <p>{email}</p>
            <p>https://github.com/{github}</p> */}
            <p>{data}</p>
          </div>
        )}

        {!generated && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setGenerated(true);
              document.getElementById("placeHolder").style.display = "block";
              document.getElementById("bottom").style.display = "flex";
              generate();
            }}
          >
            {/* <div className="name">
              <input
                type="text"
                name="firstName"
                id="firstName"
                maxLength="20"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                maxLength="20"
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
              maxLength="35"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="github"
              id="github"
              maxLength="20"
              placeholder="Github Username"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
            /> */}
            <textarea
              name="data"
              id="data"
              cols="30"
              rows="10"
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
            <div id="button-container">
              <button
                type="reset"
                onClick={(e) => {
                  e.preventDefault();
                  // setFirstName("");
                  // setLastName("");
                  // setEmail("");
                  // setGithub("");
                  setData("");
                  document.getElementById("placeHolder").style.display = "none";
                }}
              >
                Cancel
              </button>
              <button type="submit">Create</button>
            </div>
          </form>
        )}
      </div>
      <div id="bottom">
        <button
          onClick={() => {
            setGenerated(false);
            document.getElementById("bottom").style.display = "none";
          }}
        >
          Edit
        </button>
        <button className="print" onClick={() => window.print()}>
          Print
        </button>
      </div>
    </>
  );
}

export default App;
