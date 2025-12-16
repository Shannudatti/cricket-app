import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function MatchCard({ match }) {
  const [open, setOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setOpen(true),
    trackMouse: true
  });

  return (
    <>
      <div {...handlers} className="score-card" onClick={() => setOpen(true)}>
        {match.live && <div className="live-badge">LIVE</div>}
        <div className="match-title">{match.team1} vs {match.team2}</div>
        <div className="team-row">{match.score1 || "-"}</div>
        <div className="team-row">{match.score2 || "-"}</div>
        <div className="status">{match.status}</div>
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <h3>{match.team1} vs {match.team2}</h3>
            <p>{match.status}</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
