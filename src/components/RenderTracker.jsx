import React, { useState, useRef, useEffect } from "react";
export default function RenderTracker() {
  const [number, setNumber] = useState("");
  const renderCount = useRef(0);
  const prevNumber = useRef("");

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevNumber.current = number;
  }, [number]);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Render Tracker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>Render Count: {renderCount.current}</p>
      <p>Previous Value: {prevNumber.current}</p>
      <p>Current Value: {number}</p>
    </div>
  );
}