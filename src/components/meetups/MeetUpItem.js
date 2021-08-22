import classes from "./MeetUpItem.module.css";
const MeetUpItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.img} alt="item" />
      </div>
      <div className={classes.content}>
        <h3>{props.last_name}</h3>
        <h5>{props.email}</h5>
        <p>{props.gender}</p>
      </div>
      <div className={classes.actions}>
        <button>{props.first_name}</button>
      </div>
    </li>
  );
};
export default MeetUpItem;
