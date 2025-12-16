import React from "react";
import "../styles.css";

export default function MatchCard({ match }) {
  return (
    <div className="score-card">
      {match.status?.toLowerCase().includes("live") && (
        <div className="live-badge">🔴 LIVE</div>
      )}

      <div className="match-title">{match.name}</div>

      {match.score?.map((s, i) => (
        <div key={i} className="team-row">
          <div className="team-logo">{s.inning[0]}</div>
          <div>
            <strong>{s.inning}</strong>: {s.r}/{s.w} ({s.o})
          </div>
        </div>
      ))}

      <div className="status">{match.status}</div>
    </div>
  );
}
