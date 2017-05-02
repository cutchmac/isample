import * as angular from  'angular';
import {addState} from '../router';

// Default module state
addState('app.imdb', {url: 'imdb', abstract: true});

// Define module
export const imdb = 'imdb';
angular.module(imdb, []);