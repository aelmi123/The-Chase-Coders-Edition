import React, { useState, useEffect } from "react";
import axios from "axios";
export const ScoreBoard = () => {
  const [AllScores, SetAllScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/AllScores").then((response) => {
      SetAllScores(response.data);
    });
  }, []);
  console.log(AllScores);
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "2%" }}>
        {AllScores.map((item) => (
          <>
            <h6>Name: {item.name}</h6>
            <p>Score: {item.score}</p>
          </>
        ))}
      </div>
    </div>
  );
};
