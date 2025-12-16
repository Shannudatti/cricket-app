import React, { useEffect, useState } from "react";
import axios from "axios";
import { LIVE_MATCHES } from "../api";
import MatchCard from "../components/MatchCard";
import "../styles.css";

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);

  const load = async () => {
    try {
      const res = await axios.get(LIVE_MATCHES);
      setMatches(res.data.data || []);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!matches.length)
    return <h2 style={{ textAlign: "center" }}>No Live Matches</h2>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>🏏 Live Matches</h2>
      {matches.map((m, i) => (
        <MatchCard key={i} match={m} />
      ))}
    </div>
  );
}
