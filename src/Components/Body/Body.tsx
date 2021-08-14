import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import '../Common/common.css';
import { getCke } from '../../Helpers/CookieHelper.js';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Letters from '../Letters/Letters';

function Body() {
  const visited = getCke('visited');
  const [skipAll, setSkipAll] = useState(visited ? true : false);
  const history = createBrowserHistory();
  return (
    <div className='body'>
      <Router history={history}>
        <Switch>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/letters'>
            <Letters />
          </Route>
          <Route path='/'>
            {' '}
            <Home skipAll={skipAll} />{' '}
            {!visited && (
              <div style={{ fontSize: '8px', textAlign: 'end' }}>
                Tap anywhere to speed up <div>or</div>{' '}
                <div style={{ cursor: 'pointer' }} onClick={() => setSkipAll(true)}>
                  Tap here to skip
                </div>
              </div>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Body;
