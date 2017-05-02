
import '../sass/index.scss';

import * as angular from  'angular';
import * as uiRouter from 'angular-ui-router';
import 'angular-material';
import 'angular-svg-round-progressbar';

import {Router, AppHttpConfig, API_URL} from './config';
import {AppRouter} from './router';
import { HttpHandler } from "./HttpHandler";

import './imdb';

export const FrontendApp = 'isample';
const deps = [
  uiRouter.default,
  'imdb',
  'ngMaterial'
];

angular
  .module(FrontendApp, deps)
  .config(Router)
  .config(AppRouter)
  .config(AppHttpConfig)
  .constant('API_URL', API_URL)
  .service('HttpHandler', HttpHandler)
;

angular.element(document).ready(() => angular.bootstrap(document, [FrontendApp]));