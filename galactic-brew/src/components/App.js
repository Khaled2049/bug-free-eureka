import React from 'react';
import Songs from './songs';
import NewsList from './news/NewsList';
import Home from './Home';
import {
  ProjectCreate,
  ProjectDelete,
  ProjectEdit,
  ProjectList,
  ProjectShow,
} from './projects';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/songs" exact component={Songs} />
          <Route path="/news" exact component={NewsList} />
          <Route path="/projects/new" exact component={ProjectCreate} />
          <Route path="/projects/delete" exact component={ProjectDelete} />
          <Route path="/projects/edit" exact component={ProjectEdit} />
          <Route path="/projects/list" exact component={ProjectList} />
          <Route path="/projects/show" exact component={ProjectShow} />
          <Route path="/projects/show" exact component={ProjectShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
