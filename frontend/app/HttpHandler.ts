import {API_URL} from './config';

const HttpConfig = {
  url: `${API_URL}/api`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {}
};


export interface IHttpHandler {
  fetch(label: string, id: string, vendor?: boolean): Promise<any>;
  query(label: string, query: Object, vendor?: boolean): Promise<Array<any>> | Promise<any>;
}

export class HttpHandler implements IHttpHandler {

  constructor(private $http) {

  }

  async fetch(label, id, vendor = false) {
    let request = Object.assign({}, HttpConfig);

    try {
      request.method = 'GET';
      if(vendor === true){
        request.url = `${request.url}/vendor`;
      }
      request.url = `${request.url}/${label}/${id}`;

      return await this.$http(request);

    } catch (e) {
      console.log(`Could not fetch id ${id} against api ${request.url}`, request, e);
      throw e;
    }
  }

  async query(label, query = {}, vendor = false) {
    let request = Object.assign({}, HttpConfig);

    try {
      if(vendor === true){
        request.url = `${request.url}/vendor`;
      }
      request.url = `${request.url}/${label}`;

      request.data = {message: query};

      let res = await this.$http(request);

      if(Array.isArray(res.data) === false){
        res.data = [res.data];
      }

      return res.data;

    } catch (e) {
      console.log(`Could not query against api ${request.url}`, request, e);
      throw e;
    }
  }

}
