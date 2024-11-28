import React from "react";

import { useFavorite } from "../context/FavoritesContext";
import { useMeetup } from "../context/MeetupsContext";

import MeetupItem from "../components/meetups/MeetupItem";

import classes from "../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { meetup: favoriteMeetups } = useFavorite();
  const { meetup: newMetup } = useMeetup();

  const allMeetups = [...favoriteMeetups, ...newMetup];

  if (!allMeetups || allMeetups.length === 0) {
    return <p>No meetups available.</p>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {allMeetups.map((meetup) => (
          <MeetupItem key={meetup.id} meetup={meetup} />
        ))}
      </ul>
    </section>
  );
}
