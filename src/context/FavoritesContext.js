import React, { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    const fetchMeetupsList = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setMeetup(data);
      } catch (error) {
        console.error("Error loading meetups", error);
      }
    };
    fetchMeetupsList();
  }, []);

  const addFavorite = (item) => {
    setFavorite((favorite) => [...favorite, item]);
  };

  const removeFavorite = (itemId) => {
    setFavorite((favorite) => favorite.filter((item) => item.id !== itemId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorite, addFavorite, removeFavorite, meetup }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorite = () => {
  return useContext(FavoritesContext);
};
