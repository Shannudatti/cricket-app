import React, { useState } from "react";
import LiveMatches from "./components/LiveMatches";
import YesterdayMatches from "./components/YesterdayMatches";
import UpcomingMatches from "./components/UpcomingMatches";
import Scorecard from "./components/Scorecard";
import "./styles.css";

function App() {
  const [page, setPage] = useState("live");
  const [matchId, setMatchId] = useState("");

  return (
    <div style={{ padding: 20 }}>
      {/* Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: 25
      }}>
        <button className="nav-btn" onClick={() => setPage("live")}>Live</button>
        <button className="nav-btn" onClick={() => setPage("yesterday")}>Yesterday</button>
        <button className="nav-btn" onClick={() => setPage("upcoming")}>Upcoming</button>
        <button className="nav-btn" onClick={() => setPage("scorecard")}>Scorecard</button>
      </div>

      {/* Pages */}
      {page === "live" && <LiveMatches />}
      {page === "yesterday" && <YesterdayMatches />}
      {page === "upcoming" && <UpcomingMatches />}
      
      {page === "scorecard" && (
        <div style={{ textAlign: "center" }}>
          <input
            placeholder="Enter match ID"
            value={matchId}
            onChange={(e) => setMatchId(e.target.value)}
            style={{
              padding: 10,
              width: 250,
              borderRadius: 10,
              border: "1px solid #ccc",
              marginBottom: 20
            }}
          />
          {matchId && <Scorecard matchId={matchId} />}
        </div>
      )}
    </div>
  );
}

export default App;
