import { Component } from "../decorators";

const view = `
<md-content layout-padding layout="column" flex>
  
  <md-content layout="row" class="dashboard-header" flex>
    <md-content class="header-info" layout="column" layout-align="center start">
        <h2 class="header-type">IMDB Search</h2>
    </md-content>
  </md-content>
  
  <md-content layout-gt-sm="row">
    <md-card flex-gt-sm="50" layout-padding>
      <md-content layout="column">
        <h4>Search by Title or ID</h4>
        <span>Try entering "Help"</span>
        <md-content>
          <div layout-gt-sm="row">
            Some content here
          </div>
        </md-content>
      </md-content>
    </md-card>
  </md-content>
  
</md-content>
`;

@Component({
  moduleId: 'imdb',
  selector: 'imdbSearchTemplate',
  template: view,
  state: 'app.imdb.search',
  stateConfig: {
    url: '/search',
    views: { '@app': { component: 'imdbSearchTemplate' } }
  },
  providers: ['$http', '$scope' ]
})
export class imdbSearchTemplate {
  
  constructor(private $http, private $scope) {


  }
  
}