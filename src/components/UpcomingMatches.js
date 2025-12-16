import React, { useEffect, useState } from "react";
import axios from "axios";
import { ALL_MATCHES } from "../api";
import "../styles.css";
import MatchCard from "./MatchCard";

export default function UpcomingMatches() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(ALL_MATCHES).then((res) => {
      const filtered = res.data.data.filter(
        (m) => m.status === "Not Started"
      );
      setData(filtered);
    });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>🔮 Upcoming Matches</h2>
      {data.map((m, i) => (
        <MatchCard key={i} match={m} />
      ))}
    </div>
  );
}
