import React, { createContext, useContext, useState } from "react";

const MeetupsContext = createContext();

export const MeetupsProvider = ({ children }) => {
  const [meetups, setMeetups] = useState([]);

  const addMeetup = (meetup) => {
    setMeetups((prevMeetups) => [...prevMeetups, meetup]);
  };

  return (
    <MeetupsContext.Provider value={{ meetups, addMeetup }}>
      {children}
    </MeetupsContext.Provider>
  );
};

export const useMeetups = () => {
  const context = useContext(MeetupsContext);
  if (!context) {
    throw new Error("useMeetups must be used within a MeetupsProvider");
  }
  return context;
};
