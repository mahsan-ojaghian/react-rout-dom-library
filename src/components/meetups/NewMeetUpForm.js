import { useRef } from "react";
import classes from "./NewMeetUpForm.module.css";
import Card from "../Ui/Card";
const NewMeetUpForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descriptionInputRef.current.value;
    const meetUpData = [
      {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDesc
      }
    ];
    props.onAddMeetup(meetUpData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="address">MeetUp Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetUpForm;
