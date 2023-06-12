import React from "react";

function Landing(props) {
  return (
    <body>
      <main>
        <h1>Test Your Computer Science Knowledge</h1>
        <button className="landingButton" onClick={props.start}>
          Start Quizz
        </button>
      </main>
    </body>
  );
}

export default Landing;
