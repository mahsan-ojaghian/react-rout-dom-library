import classes from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";
const MeetUpList = (props) => {
  return (
    <ul className={classes.list}>
      {props.item.map((item) => (
        <MeetUpItem
          key={item.id}
          id={item.id}
          image={item.img}
          lastName={item.last_name}
          email={item.email}
          gender={item.gender}
        />
      ))}
    </ul>
  );
};
export default MeetUpList;
