import logo from "./logo.svg";
import "./App.css";

//React Router DOM
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";

import NavbarHome from "./components/NavBarHome";

import { routeHome } from "./routes";

function App() {
  // Ham for route
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <NavbarHome />
        <Switch>
          {showLayoutHome(routeHome)}

          {/*Ham viet trong function nen khong can dung tu khoa "this"*/}
          {/* Always at the bottom under other components */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
