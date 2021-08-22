import classes from "./NewMeetUpForm.module.css";
import Card from "../Ui/Card";
const NewMeetUpForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" />
        </div>
        <div>
          <label htmlFor="address">MeetUp Address</label>
          <input type="text" required id="address" />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" required rows="5"></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetUpForm;
