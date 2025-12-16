import React, { useEffect, useState } from "react";
import axios from "axios";
import { SCORECARD } from "../api";

export default function Scorecard({ matchId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(SCORECARD(matchId)).then((res) => {
      setData(res.data.data);
    });
  }, [matchId]);

  if (!data) return <h3>Loading full scorecard...</h3>;

  return (
    <div style={{ padding: 20 }}>
      <h2>📊 Full Scorecard</h2>

      {data.scorecard?.map((inn, i) => (
        <div className="score-card" key={i}>
          <h2>{inn.inning}</h2>

          <h3>Batting</h3>
          {inn.batsmen?.map((b, j) => (
            <p key={j}>
              <strong>{b.name}</strong> — {b.runs} ({b.balls}) | 4s: {b.fours} | 6s: {b.sixes}
            </p>
          ))}

          <h3>Bowling</h3>
          {inn.bowlers?.map((bl, k) => (
            <p key={k}>
              <strong>{bl.name}</strong> — {bl.overs} overs | {bl.runs} runs | {bl.wickets} wickets
            </p>
          ))}

          <h3>Fall of Wickets</h3>
          {inn.fows?.map((f, t) => (
            <p key={t}>
              {f.wicket}: {f.score} — {f.over} ov
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
