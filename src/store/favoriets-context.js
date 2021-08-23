import { createContext, useState } from "react";
const FavorietsContext = createContext({
  favoriets: [],
  totalFavoriets: 0
});
const FavorietsContextProvider = (props) => {
  const [userFavoriets, setUserFavoriets] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavoriets(userFavoriets.concat(favoriteMeetup));
  }
  function removeFavoriteHandler() {}
  function itemIsFavoriteHandler() {}

  const context = {
    favoriets: userFavoriets,
    totalFavoriets: userFavoriets.length
  };
  return <FavorietsContext value={context}>{props.children}</FavorietsContext>;
};
