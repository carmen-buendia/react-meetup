import React from "react";
import { Link } from "react-router-dom";
import { useFavorite } from "../../context/FavoritesContext";
import classes from "./MainNavigation.module.css";
import { navLinks } from "../../utils/navLinks";

export default function MainNavigation() {
  const { favorite } = useFavorite();
  const favoritesCount = favorite.length;

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {navLinks.map(({ to, text, testId }) => (
            <li key={to}>
              <Link to={to} data-test={testId}>
                {text}
                {to === "/favorites" && (
                  <span className={classes.badge}>{favoritesCount}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
