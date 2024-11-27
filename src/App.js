import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { FavoritesProvider } from "./context/FavoritesContext";
import { MeetupsProvider } from "./context/MeetupsContext";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div data-test="app">
      <Router>
        <FavoritesProvider>
          <MeetupsProvider>
            <MainNavigation />
            <Layout>
              <Switch>
                <Route path="/" exact component={AllMeetupsPage} />
                <Route path="/new-meetup" component={NewMeetupsPage} />
                <Route path="/favorites" component={FavoritesPage} />
              </Switch>
            </Layout>
          </MeetupsProvider>
        </FavoritesProvider>
      </Router>
    </div>
  );
}

export default App;
