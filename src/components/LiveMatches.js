import React, { useEffect, useState } from "react";
import axios from "axios";
import { LIVE } from "../api";
import MatchCard from "./MatchCard";
import SkeletonCard from "./SkeletonCard";

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await axios.get(LIVE);
    setMatches(res.data?.matches || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 align="center">🏏 Live Matches</h2>
      {loading
        ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
        : matches.map((m, i) => <MatchCard key={i} match={m} />)}
    </>
  );
}
