// Map to hold application states
const states: Map<any,any> = new Map();

/**
 * adds a state to be registered when the app loads
 * @param {string} name - route/state name (ex: app.home)
 * @param {IState} config
 */
function addState (name: string, config) {
  states.set(name, config);
}

/**
 * loops through the registered states and adds them to the UI-Router $stateProvider
 * @param {IStateProvider} stateProvider
 */
function compileStates (stateProvider) {
  states.forEach((key, value) => {
    stateProvider.state(value, key);
  });
}

function AppRouter ($stateProvider) {
  compileStates($stateProvider);
}
//noinspection TypeScriptUnresolvedVariable
AppRouter.$inject = ['$stateProvider'];

export {states, addState, AppRouter}