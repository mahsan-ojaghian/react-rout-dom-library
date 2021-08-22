import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
function NewMeetUpPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-512ed-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
