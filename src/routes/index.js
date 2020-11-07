import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import HomePage from "../containers/HomeTemplate/HomePage";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import HocPage from "../containers/HomeTemplate/HOCPage";
import DashBoard from "../containers/AdminTemplate/DashBoard";
import UserPage from "../containers/AdminTemplate/User";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/movie-list",
    component: ListMoviePage,
  },

  //Thong tin chi tiet cua phim
  {
    exact: false,
    path: "/details/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashBoard,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
];
export { routeHome, routesAdmin };
