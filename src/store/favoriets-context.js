import { createContext, useState } from "react";
const FavorietsContext = createContext({
  favoriets: [],
  totalFavoriets: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetup) => {},
  itemIsFavorite: (meetupId) => {}
});
export const FavorietsContextProvider = (props) => {
  const [userFavoriets, setUserFavoriets] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavoriets((prevFavoriteUser) => {
      return prevFavoriteUser.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavoriets((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => meetup.Id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavoriets.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favoriets: userFavoriets,
    totalFavoriets: userFavoriets.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  return <FavorietsContext value={context}>{props.children}</FavorietsContext>;
};
export default FavorietsContextProvider;
