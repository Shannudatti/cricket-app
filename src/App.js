import React, { useState } from "react";
import LiveMatches from "./components/LiveMatches";
import UpcomingMatches from "./components/UpcomingMatches";
import YesterdayMatches from "./components/YesterdayMatches";
import "./styles.css";

export default function App() {
  const [view, setView] = useState("live");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      {/* Dark mode toggle */}
      <button className="dark-toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>

      {/* Sticky Navbar */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => setView("live")}>Live</button>
        <button className="nav-btn" onClick={() => setView("upcoming")}>Upcoming</button>
        <button className="nav-btn" onClick={() => setView("recent")}>Recent</button>
      </div>

      {/* Pages */}
      {view === "live" && <LiveMatches />}
      {view === "upcoming" && <UpcomingMatches />}
      {view === "recent" && <YesterdayMatches />}
    </div>
  );
}
