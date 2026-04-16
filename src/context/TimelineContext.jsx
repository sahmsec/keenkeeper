import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("timeline");
    if (stored) {
      setTimeline(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addEntry = (entry) => {
    setTimeline((prev) => [...prev, entry]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);