import React, { useState, useEffect } from "react";
const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Network Status</h2>
      <p>
        Status:{" "}
        <span style={{ color: isOnline ? "green" : "red", fontWeight: "bold" }}>
          {isOnline ? " Online" : "Offline"}
        </span>
      </p>
    </div>
  );
};

export default OnlineStatus;