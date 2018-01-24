'use strict';

import './style.css';
import './polyfill';
import ng from 'angular';
import app from './app/app.module';

let main = ng.module('main', [app]);

ng.element(document).ready(() => {
    console.info("AngularJS is running BABY!!!");
    ng.bootstrap(document, [main.name]);
});