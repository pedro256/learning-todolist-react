import SideNavBar from "./components/sidenavbar/SideNavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { GlobalContext } from "./hooks/GlobalContext";
import Tasks from "./pages/Tasks/Tasks";
import Profile from "./pages/Profile/Profile";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  const global = React.useContext(GlobalContext);
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavBar className="container"></SideNavBar>

        <div
          style={{
            marginLeft: global.expandedNav ? 240 : 64,
            padding: "15px 20px 0 20px",
          }}
        >
          <Switch>
            <Route path="/Tasks" exact={true} component={Tasks} />
            <Route path="/Profile" exact={true} component={Profile} />
            <Route path="/Calendar" exact={true} component={Calendar} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
