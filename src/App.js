import React from 'react';
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about" exact>About</NavLink></li>
            <li><NavLink to="/blogs" exact>Blogs</NavLink></li>
            <li><NavLink to={'/blog/' + uuidv4()} exact>Random-Blog</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact render={()=> <h1>Welcome to homepage!</h1>} />
        <Route path="/about" exact render={()=> <h1>Welcome to about page!</h1>} />
        <Route path="/blogs" exact render={() => <h1>Welcome to blogs page!</h1>} />
        <Route path="/blog/:blogId" exact render={(props) => <h1>Welcome to blog with id {props.match.params.blogId}</h1>} />
        <Redirect from="/" to="/" />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
