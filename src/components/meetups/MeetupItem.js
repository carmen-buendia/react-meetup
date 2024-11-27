import React, { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ meetup }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === meetup.id));
  }, [favorites, meetup.id]);

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      removeFavorite(meetup.id);
    } else {
      addFavorite(meetup);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
