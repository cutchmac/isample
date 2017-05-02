// global css
import '../sass/index.scss';

import * as angular from  'angular';
import * as uiRouter from 'angular-ui-router';
import 'angular-material';
import 'angular-svg-round-progressbar';

import {Router, AppHttpConfig, API_URL} from './config';
import './imdb';
import {AppRouter} from './router';

export const FrontendApp = 'isample';
const deps = [
  uiRouter.default,
  'imdb'
];

angular
  .module(FrontendApp, deps)
  .config(Router)
  .config(AppRouter)
  .config(AppHttpConfig)
  .constant('API_URL', API_URL)
;

angular.element(document).ready(() => angular.bootstrap(document, [FrontendApp]));