import classes from "./MeetUpItem.module.css";
import Card from "../Ui/Card";
const MeetUpItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt="item" />
        </div>
        <div className={classes.content}>
          <h3>{props.last_name}</h3>
          <h5>{props.email}</h5>
          <p>{props.gender}</p>
        </div>
        <div className={classes.actions}>
          <button>Click here</button>
        </div>
      </Card>
    </li>
  );
};
export default MeetUpItem;
