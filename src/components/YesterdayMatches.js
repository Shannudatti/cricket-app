import React, { useEffect, useState } from "react";
import axios from "axios";
import { ALL_MATCHES } from "../api";
import MatchCard from "../components/MatchCard";

export default function YesterdayMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get(ALL_MATCHES).then((res) => {
      if (!res.data?.data) return;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const y = yesterday.toISOString().split("T")[0];

      const filtered = res.data.data.filter(
        (m) => m.date?.startsWith(y)
      );

      setMatches(filtered || []);
    });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>📅 Yesterday's Matches</h2>

      {matches.map((m, index) => (
        <MatchCard key={index} match={m} />
      ))}

      {matches.length === 0 && (
        <h3 style={{ textAlign: "center" }}>No matches yesterday</h3>
      )}
    </div>
  );
}
