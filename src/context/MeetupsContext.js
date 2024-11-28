import React, { createContext, useContext, useState } from "react";

const MeetupsContext = createContext();

export const MeetupsProvider = ({ children }) => {
  const [meetup, setMeetup] = useState([]);

  const addMeetup = (newMeetup) => {
    setMeetup((meetup) => [...meetup, newMeetup]);
  };

  return (
    <MeetupsContext.Provider value={{ meetup, addMeetup }}>
      {children}
    </MeetupsContext.Provider>
  );
};

export const useMeetup = () => {
  return useContext(MeetupsContext);
};
