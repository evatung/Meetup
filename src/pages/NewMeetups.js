import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetups = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      `https://my-third-project-f58a0-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    ).then(() => {
      history.replace("./");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetups;
