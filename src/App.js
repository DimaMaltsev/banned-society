import React from 'react'
import SimpleReactRouter from 'simple-react-router'
import './css/style.css';

import Root from './components/root';
import Visuals from './components/visuals';

export default class Router extends SimpleReactRouter {
  routes(map){
    map('/', Root),
    map('/visuals', Visuals)
  }
}
