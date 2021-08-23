import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavorietsContextProvider } from "./store/favoriets-context";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FavorietsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavorietsContextProvider>,
  rootElement
);
