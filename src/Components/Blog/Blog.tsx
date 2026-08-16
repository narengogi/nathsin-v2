import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router';
import '../Common/common.css';
import './blog.css';
import { createBrowserHistory } from 'history';
import Template from './Template';
import { allPosts } from './List';

// Dates are always "day month year" e.g. '3rd May 2026', '17th Jan 2021'.
function parseDate(date: string) {
  const [, month, year] = date.split(' ');
  return { month, year };
}

const posts = allPosts.map((item: any) => ({ ...item, ...parseDate(item.date) }));

const years = Array.from(new Set<string>(posts.map((p: any) => p.year))).sort().reverse();
const months = Array.from(new Set<string>(posts.map((p: any) => p.month)));

function PostList() {
  const [year, setYear] = useState('all');
  const [month, setMonth] = useState('all');

  const results = posts.filter((post: any) => {
    if (year !== 'all' && post.year !== year) return false;
    if (month !== 'all' && post.month !== month) return false;
    return true;
  });

  return (
    <div className='blog-list'>
      <div className='blog-filters'>
        <label className='blog-field'>
          <span className='blog-field-label'>year</span>
          <select
            className='blog-select'
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setMonth('all');
            }}
          >
            <option value='all'>all</option>
            {years.map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className='blog-field'>
          <span className='blog-field-label'>month</span>
          <select className='blog-select' value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value='all'>all</option>
            {months.map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        {(year !== 'all' || month !== 'all') && (
          <button
            type='button'
            className='blog-clear'
            onClick={() => {
              setYear('all');
              setMonth('all');
            }}
          >
            clear
          </button>
        )}
      </div>
      <div>
        {results.map((item: any) => (
          <div className='blog-post' key={item.href}>
            <div>
              <a className='href' href={`/blog${item.href}`}>
                {item.title}
              </a>
            </div>
            <div className='blog-date'>{item.date}</div>
          </div>
        ))}
        {results.length === 0 && <div className='blog-empty'>no posts matched</div>}
      </div>
    </div>
  );
}

function Blog() {
  let history = createBrowserHistory();

  return (
    <div className='blog'>
      <Router history={history}>
        <Switch>
          {allPosts.map((item: any) => (
            <Route path={`/blog${item.href}`}>
              <Template title={item.title} content={item.content} />
            </Route>
          ))}
          <Route path='/blog'>
            <div className='centeredContainer'>
              <PostList />
            </div>
          </Route>
          <Route exact path='/'>
            <div className='centeredContainer'>
              <PostList />
            </div>
          </Route>
        </Switch>
      </Router>{' '}
    </div>
  );
}

export default Blog;
