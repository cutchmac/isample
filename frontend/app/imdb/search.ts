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
          <md-autocomplete md-no-cache=true md-selected-item="$ctrl.selectedItem" md-search-text="$ctrl.searchText" md-items="item in $ctrl.querySearch($ctrl.searchText)" md-item-text="item.title" md-min-length="1" placeholder="What movie are you looking for?">
            <md-item-template>
              <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.title}}</span>
            </md-item-template>
            <md-not-found>
              No movies matching "{{ctrl.searchText}}" were found.
            </md-not-found>
          </md-autocomplete>
        </md-content>
      </md-content>
    </md-card>
    
    <md-card flex-gt-sm="50" layout-padding>
      <md-content layout="column">
        <h4>Discovered Movie</h4>
        <md-content ng-if="$ctrl.selectedItem">
          <md-list-item class="md-3-line">
            <div class="md-list-item-text" layout="column">
              <h3>{{ $ctrl.selectedItem.title }}</h3>
              <h4>Year: {{ $ctrl.selectedItem.year }}</h4>
              <h4>Runtime: {{ $ctrl.selectedItem.runtime }}</h4>
              <h4>Actors: {{ $ctrl.selectedItem.actors }}</h4>
              <p>{{ $ctrl.selectedItem.plot }}</p>
            </div>
            </md-list-item>
        </md-content>

        <md-content ng-if="!$ctrl.selectedItem">
          Search a movie on the left and it will appear here
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
  providers: ['HttpHandler', '$scope', '$timeout' ]
})
export class imdbSearchTemplate {

  private tt = null;
  private res;
  private searchText;
  private selectedItem;
  
  constructor(private HttpHandler, private $scope, private $timeout) {


  }

  /**
   *
   * @param q
   * @returns Promise<any>
   */
  querySearch(q){
    return this.HttpHandler.query('imdb', {name: q}, true);
  }


  
}