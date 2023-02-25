
import { Router, Switch } from "react-router-dom";
//REDUX
import { Provider } from "react-redux";
import { history } from "./Utils/constants";
import Home from "./Screens/Home";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/store";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import AppRoutes from "./Routes/app.router";
import DetailMovie from "./Screens/DetailMovie";

function App() {
  const routes = [
    {
      path: "/",
      element: Welcome,
      isPrivate: false,
      exact: true,
    },
    {
      path: "/home",
      element: Home,
      isPrivate: true,
      exact: true,
    },
    {
      path: "/login",
      element: Login,
      isPrivate: false,
      exact: true,
    },
    {
      path: "/detail_movie",
      element: DetailMovie,
      isPrivate: true,
      exact: true,
    },
    {
      path: "/*",
      element: Welcome,
      isPrivate: false,
    },
  ];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            {routes.map((route) => (
              <AppRoutes
                key={route.path}
                path={route.path}
                exact={route.exact}
                isPrivate={route.isPrivate}
                component={route.element}
              />
            ))}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}
if (window.Cypress) {
  window.store = store;
}
export default App;


