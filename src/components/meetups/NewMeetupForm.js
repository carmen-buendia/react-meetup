import React, { useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useMeetup } from "../../context/MeetupsContext";

export default function NewMeetupForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const { addMeetup } = useMeetup();

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const imageChangeHandler = (event) => setImage(event.target.value);
  const addressChangeHandler = (event) => setAddress(event.target.value);
  const descriptionChangeHandler = (event) =>
    setDescription(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      image: image,
      address: address,
      description: description,
    };
    addMeetup(newMeetup);

    setTitle("");
    setImage("");
    setAddress("");
    setDescription("");
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
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={imageChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={address}
            onChange={addressChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={description}
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
