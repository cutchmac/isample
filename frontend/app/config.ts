// SET THIS TO LOCAL OR DEVELOPMENT TO CHANGE API ENDPOINT
const API_URL = "http://localhost:8088";

// Enable console debug
const DEBUG_ENABLED: boolean = true;

export class Router {

  constructor($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/imdb/search');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/',
        template: `
          <md-toolbar layout="row" class="md-toolbar-tools top-bar-heading">
            <span flex></span>
          </md-toolbar>
          <div layout="row" flex>
            <md-content flex layout="column">
              <md-content flex layout="column">
                <div ui-view="" style="height: 100%"></div>
              </md-content>
            </md-content>
          </div>          
          `
      });
    $locationProvider.html5Mode(true);

  }
}
Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export function AppHttpConfig ($httpProvider, $sceDelegateProvider) {


  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.post['X-Requested-With'];
  $httpProvider.useApplyAsync(true);

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    `${API_URL}/**`
  ]);
}
//noinspection TypeScriptUnresolvedVariable
AppHttpConfig.$inject = ['$httpProvider', '$sceDelegateProvider'];

export {API_URL, DEBUG_ENABLED};
