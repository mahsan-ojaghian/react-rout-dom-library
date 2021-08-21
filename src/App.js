import "./styles.css";
import { Route, Switch } from "react-router-dom";
import AllMeetsUpPage from "./pages/AllMeetsUp";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavorietsPage from "./pages/Favoriets";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/all" exact>
          <AllMeetsUpPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favoriets">
          <FavorietsPage />
        </Route>
      </Switch>
    </div>
  );
}
