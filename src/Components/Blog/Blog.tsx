import React from 'react';
import { Router, Route, Switch } from 'react-router';
import '../Common/common.css';
import { createBrowserHistory } from 'history';
import Template from './Template';
import { allPosts } from './List';

function listPosts() {
  console.log('test');
  return (
    <div>
      <div style={{ fontSize: '24px', color: 'var(--white)', padding: '2rem 0' }}>All Posts</div>
      {allPosts.map((item) => (
        <div style={{ padding: '1rem' }}>
          <div>
            <a className='href' href={`/blog${item.href}`}>
              {item.title}
            </a>
          </div>
          <div style={{ fontSize: '10px' }}>{item.date}</div>
        </div>
      ))}
    </div>
  );
}

function Blog() {
  let history = createBrowserHistory();

  return (
    <div className='blog'>
      <Router history={history}>
        <Switch>
          {allPosts.map((item) => (
            <Route path={`/blog${item.href}`}>
              <Template title={item.title} content={item.content} />
            </Route>
          ))}
          <Route path='/blog'>
            <div className='centeredContainer'>{listPosts()}</div>
          </Route>
        </Switch>
      </Router>{' '}
    </div>
  );
}

export default Blog;
