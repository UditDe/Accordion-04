import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Question and Answers about logIn</h3>
        <div>
          {data.map((eachData) => {
            return <SingleQuestion {...eachData} key={data.id} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
