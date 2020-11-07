import logo from "./logo.svg";
import "./App.css";

//React Router DOM
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";

import NavbarHome from "./components/NavBarHome";
import NavbarAdmin from "./components/NavbarAdmin";

import { routeHome, routesAdmin } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from "./containers/AdminTemplate/AuthPage";

function App() {
  // Ham for route
  // const showLayoutHome_2 = (routes) => {
  //   if (routes && routes.length > 0) {
  //     return routes.map((item, index) => {
  //       return (
  //         <Route
  //           key={index}
  //           exact={item.exact}
  //           path={item.path}
  //           component={item.component}
  //         />
  //       );
  //     });
  //   }
  // };

  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        {/* <NavbarHome />
        <NavbarAdmin /> */}

        <Switch>
          {showLayoutHome(routeHome)}
          {showLayoutAdmin(routesAdmin)}

          {/*Ham viet trong function nen khong can dung tu khoa "this"*/}
          {/* Always at the bottom under other components */}
          <Route exact={false} path="/auth" component={AuthPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
