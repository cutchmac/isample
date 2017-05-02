import * as angular from 'angular';
import {addState} from './router';

export interface IComponentConfig {
  moduleId: string;
  selector: string;
  template?: string|Function;
  templateView?: string;
  bindings?: Object;
  controllerAs?: string;
  transclude?: boolean;
  state?: string;
  stateConfig?: Object;
  providers?: Array<any>;
}

export const Component = (config: IComponentConfig) => {
  return (controller: any) => {
    
    // configure the state if it exists
    try {
      let state = config.state;
      let stateConfig = config.stateConfig;
      if (state && stateConfig) {
        delete config.state;
        delete config.stateConfig;
        addState(state, stateConfig);
      }
      
      let options = angular.merge({}, config);
      delete options.moduleId;
      delete options.selector;
      
      let providers = config.providers;
      if (providers && providers.length > 0) {
        controller.prototype.$inject = providers;
        controller.$inject = providers;
      }
      delete config.providers;
      
      let modName = (config.moduleId) ? config.moduleId : null;
      
      let mod = angular.module(modName);
      mod.component(config.selector, angular.extend(options, {controller: controller}));
    } catch (e) {
      console.error('error in component decorator: ', e);
    }
  }
};


