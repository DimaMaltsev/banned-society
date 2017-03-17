import React from 'react'
import SimpleReactRouter from 'simple-react-router'
import './css/style.css';

import Root from './components/root';

export default class Router extends SimpleReactRouter {
  routes(map){
    map('/', Root)
  }
}
