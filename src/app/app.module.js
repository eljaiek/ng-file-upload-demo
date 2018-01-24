'use strict';

import ng from 'angular';
import ngAnimate from 'angular-animate';
import ngUI from 'angular-ui-bootstrap';
import uiRouter from '@uirouter/angularjs';
import ngFileUpload from 'ng-file-upload';
import AppConfig from './app.config';
import {AppComponent} from "./app.component";

const app = ng.module('app', [ngAnimate, ngUI, uiRouter, ngFileUpload]);
app.config(AppConfig);
app.component('appRoot', AppComponent);

export default app.name;