import React from "react";
import Songs from "./songs";
import NewsList from "./news/NewsList";
import Home from "./Home";
import "semantic-ui-css/semantic.min.css";
import {
  ProjectCreate,
  ProjectDelete,
  ProjectEdit,
  ProjectList,
  ProjectShow,
} from "./projects";
import { Route, Router, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/songs" exact component={Songs} />
            <Route path="/news" exact component={NewsList} />
            <Route path="/projects/new" exact component={ProjectCreate} />
            <Route
              path="/projects/delete/:id"
              exact
              component={ProjectDelete}
            />
            <Route path="/projects/edit/:id" exact component={ProjectEdit} />
            <Route path="/projects" exact component={ProjectList} />
            <Route path="/projects/:id" exact component={ProjectShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
