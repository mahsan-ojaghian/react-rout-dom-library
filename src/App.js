import "./styles.css";
import { Route, Switch } from "react-router-dom";
import AllMeetsUpPage from "./pages/AllMeetsUp";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavorietsPage from "./pages/Favoriets";
import Layout from "./components/layouts/Layout";
export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
