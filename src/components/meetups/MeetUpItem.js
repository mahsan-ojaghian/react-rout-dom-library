import { useContext } from "react";
import classes from "./MeetUpItem.module.css";
import Card from "../Ui/Card";
import FavorietsContext from "../../store/favoriets-context";
const MeetUpItem = (props) => {
  const favorietsCtx = useContext(FavorietsContext);
  const itemIsFavorite = favorietsCtx.itemIsFavorite(props.id);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favorietsCtx.removeFavorite(props.id);
    } else {
      favorietsCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      });
    }
  };
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
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favoriets" : "To favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};
export default MeetUpItem;
