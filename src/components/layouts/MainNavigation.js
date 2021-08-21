import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
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
            <Link to="/favoriets">some links</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
