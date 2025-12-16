import React, { useEffect, useState } from "react";
import axios from "axios";
import { UPCOMING } from "../api";
import MatchCard from "./MatchCard";
import SkeletonCard from "./SkeletonCard";

export default function UpcomingMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(UPCOMING).then(res => {
      setMatches(res.data?.matches || []);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 align="center">🔮 Upcoming-Matches</h2>
      {loading
        ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
        : matches.map((m, i) => <MatchCard key={i} match={m} />)}
    </>
  );
}
