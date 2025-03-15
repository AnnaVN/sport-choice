import React from "react";
import "./App.css";

function App() {
  const firstName = prompt("What is your name?");
  return (
    <>
      <h1 className="big">Hey, {firstName}! Nice to meet you!</h1>
      <Sport />
    </>
  );
}

const Sport = () => {
  return (
    <div>
      <h1 className="big">What kind of sport is your favourite?</h1>
      <input
        class="btn"
        type="button"
        value="swim"
        onClick={() => {
          alert("Nice shoice!");
        }}
      />
      <br />

      <input
        class="btn"
        type="button"
        value="soccer"
        onClick={() => {
          alert("Nice shoice!");
        }}
      />

      <br />
      <input
        class="btn"
        type="button"
        value="backetball"
        onClick={() => {
          alert("Nice shoice!");
        }}
      />
      <br />
      <input
        class="btn"
        type="button"
        value="marshal_arts"
        onClick={() => {
          alert("Nice shoice!");
        }}
      />
    </div>
  );
};

export default App;
