import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavorietsContext from "../../store/favoriets-context";
const MainNavigation = () => {
  const favorietsCtx = useContext(FavorietsContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUp</div>
      <nav>
        <ul>
          <li>
            <Link to="/all">some links</Link>
          </li>
          <li>
            <Link to="/new-meetup">some links</Link>
          </li>
          <li>
            <Link to="/favoriets">
              <span>{favorietsCtx.totalFavoriets}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
