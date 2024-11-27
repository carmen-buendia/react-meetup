import React, { useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useMeetups } from "../../context/MeetupsContext";

export default function NewMeetupForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const { addMeetup } = useMeetups();

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const imageChangeHandler = (event) => setEnteredImage(event.target.value);
  const addressChangeHandler = (event) => setEnteredAddress(event.target.value);
  const descriptionChangeHandler = (event) =>
    setEnteredDescription(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const newMeetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    addMeetup(newMeetup);

    window.location.href = "/meetups";

    setEnteredTitle("");
    setEnteredImage("");
    setEnteredAddress("");
    setEnteredDescription("");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            value={enteredImage}
            onChange={imageChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={enteredAddress}
            onChange={addressChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
