import React, { useEffect, useState } from "react";
import axios from "axios";
import { ALL_MATCHES } from "../api";
import "../styles.css";

export default function TodayMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get(ALL_MATCHES).then((res) => {
      const today = new Date().toISOString().split("T")[0];

      const filtered = res.data.data.filter((m) =>
        m.date?.includes(today)
      );

      setMatches(filtered);
    });
  }, []);

  return (
    <div>
      <h2>📅 Today's Matches</h2>

      {matches.map((m, idx) => (
        <div className="score-card" key={idx}>
          <div className="team">{m.teams[0]} vs {m.teams[1]}</div>
          <div className="status">{m.status}</div>
        </div>
      ))}
    </div>
  );
}
