import { useContext } from "react";
import FavoritesContext from "../store/favoriets-context";
import MeetUpList from "../components/meetups/MeetUpList";
function FavoritesPage() {
  const favorietsCtx = useContext(FavoritesContext);
  let content;
  if (favorietsCtx.totalFavories === 0) {
    content = <p>you got no favoriets</p>;
  } else {
    content = <MeetUpList meetups={favorietsCtx.favoriets} />;
  }
  return (
    <section>
      <h1>My Favoriets</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
