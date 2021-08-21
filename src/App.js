import "./styles.css";
import { Route } from "react-router-dom";
import AllMeetsUpPage from "./pages/AllMeetsUp";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavorietsPage from "./pages/Favoriets";

export default function App() {
  return (
    <div className="App">
      <Route path="/">
        <AllMeetsUpPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetUpPage />
      </Route>
      <Route path="/favoriets">
        <FavorietsPage />
      </Route>
    </div>
  );
}
