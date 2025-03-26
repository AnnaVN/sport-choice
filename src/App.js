import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    sports: [
      {
        title: "Swimmimg",
        body: "Swimming is an individual or team racing sport that requires the use of one's entire body to move through the water.",
        id: 1,
      },
      {
        title: "Soccer",
        body: "Association football, more commonly known as football or soccer, is a team sport played between two teams of 11 players each, who almost exclusively use their feet to propel a ball around a rectangular field called a pitch. The objective of the game is to score more goals than the opposing team by moving the ball beyond the goal line into a rectangular-framed goal defended by the opposing team. Traditionally, the game has been played over two 45-minute halves, for a total match time of 90 minutes. With an estimated 250 million players active in over 200 countries and territories, it is the world's most popular sport.",
        id: 2,
      },
      {
        title: "Backetball",
        body: "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court), while preventing the opposing team from shooting through their own hoop.",
        id: 3,
      },
      {
        title: "Martial Arts",
        body: "Martial arts are codified systems and traditions of combat practiced for a number of reasons such as self-defence; military and law enforcement applications; competition; physical, mental, and spiritual development; entertainment; and the preservation of a nation's intangible cultural heritage.",
        id: 4,
      },
    ],
  };

  render() {
    const firstName = prompt("What is your name?");
    return (
      <div class="greet">
        <div class="most">
          <h1 className="big">Hey, {firstName}! Nice to meet you!</h1>
          <Sport />
        </div>
        <aside className="info" style={{ display: "none" }}>
          {this.state.sports.map((sport) => (
            <div className="review" key={sport.id}>
              <h2>{sport.title}</h2>
              <p>{sport.body}</p>
            </div>
          ))}
        </aside>
      </div>
    );
  }
}
function viewDiv() {
  document.querySelector(".info").style.display = "flex";
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
          alert("Swimming is really good for health! Nice shoice!");
          viewDiv();
        }}
      />
      <br />

      <input
        class="btn"
        type="button"
        value="soccer"
        onClick={() => {
          alert("Soccer! You need to run fast.  Nice shoice!");
          viewDiv();
        }}
      />

      <br />
      <input
        class="btn"
        type="button"
        value="backetball"
        onClick={() => {
          alert("Basketball is for tall persons. Nice shoice!");
          viewDiv();
        }}
      />
      <br />
      <input
        class="btn"
        type="button"
        value="martial arts"
        onClick={() => {
          alert("Martial Arts gives you confidence. Nice shoice!");
          viewDiv();
        }}
      />
      <br />
      <input
        class="btn"
        type="button"
        value="other"
        onClick={(e) => {
          prompt("What is your favorite sport?");
          alert("Nice choice!");
          // <AddSport id=1 />;
        }}
      />
    </div>
  );
};

export default App;
//export { NameP };
