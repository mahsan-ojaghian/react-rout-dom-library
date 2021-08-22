import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
function NewMeetUpPage() {
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
    );
  }
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
