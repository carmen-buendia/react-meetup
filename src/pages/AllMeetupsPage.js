// components/AllMeetupsPage.js
import React from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import { useFavorites } from "../context/FavoritesContext";
import classes from "../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { meetups } = useFavorites();

  if (!meetups || meetups.length === 0) {
    return <p>No meetups available.</p>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups.map((meetup) => (
          <MeetupItem key={meetup.id} meetup={meetup} />
        ))}
      </ul>
    </section>
  );
}
