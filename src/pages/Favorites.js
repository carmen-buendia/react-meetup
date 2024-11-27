import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import classes from "./Favorites.module.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <section>
        <h1>Favorites Page</h1>
        <p>No favorites yet. Start adding some!</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.favoriteList}>
        {favorites.map((favorite) => (
          <li key={favorite.id} className={classes.favoriteItem}>
            <div>
              <img src={favorite.image} alt={favorite.title} />
            </div>
            <div>
              <h3>{favorite.title}</h3>
              <p>{favorite.description}</p>
              <address>{favorite.address}</address>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
