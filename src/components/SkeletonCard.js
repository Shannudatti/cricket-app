import React from "react";
import "../styles.css";

export default function SkeletonCard() {
  return (
    <div className="score-card skeleton">
      <div className="line"></div>
      <div className="line short"></div>
      <div className="line"></div>
    </div>
  );
}
