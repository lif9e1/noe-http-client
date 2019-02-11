import * as rp from 'request-promise';
import { HttpResult, Headers, HttpAgent } from './model/HttpResult';

export const agent = {
  get: (url: string, headers?: Headers, json = true) => {
    return new Promise(async (resolve, reject) => {
      var options = {
        method: 'GET',
        uri: url,
        headers: headers,
        json: json,
        resolveWithFullResponse: true,
      };
      let result = new HttpResult();
      try {
        let tmp = await rp(options);
        result.statusCode = tmp.statusCode;
        result.headers = tmp.headers;
        result.body = tmp.body;
        resolve(result);
      } catch (error) {
        if (error.statusCode) {
          result.statusCode = error.statusCode;
          result.headers = error.response.headers;
          result.body = error.response.body;
          resolve(result);
        } else {
          reject(new Error('No standard http statusCode returned!'));
        }
      }
    });
  },
  post: (url, body: any, headers?: Headers, json = true) => {
    return new Promise(async (resolve, reject) => {
      var options = {
        method: 'POST',
        uri: url,
        headers: headers,
        body: body,
        json: json,
        resolveWithFullResponse: true,
      };
      let result = new HttpResult();
      try {
        let tmp = await rp(options);
        result.statusCode = tmp.statusCode;
        result.headers = tmp.headers;
        result.body = tmp.body;
        resolve(result);
      } catch (error) {
        if (error.statusCode) {
          result.statusCode = error.statusCode;
          result.headers = error.response.headers;
          result.body = error.response.body;
          resolve(result);
        } else {
          reject(new Error('No standard http statusCode returned!'));
        }
      }
    });
  },
  put: (url: string, body: any, headers?: Headers) => {
    return new Promise(async (resolve, reject) => {
      var options = {
        method: 'PUT',
        uri: url,
        headers: headers,
        body: body,
        json: true,
        resolveWithFullResponse: true,
      };
      let result = new HttpResult();
      try {
        let tmp = await rp(options);
        result.statusCode = tmp.statusCode;
        result.headers = tmp.headers;
        result.body = tmp.body;
        resolve(result);
      } catch (error) {
        if (error.statusCode) {
          result.statusCode = error.statusCode;
          result.headers = error.response.headers;
          result.body = error.response.body;
          resolve(result);
        } else {
          reject(new Error('No standard http statusCode returned!'));
        }
      }
    });
  },
  delete: (url: string, headers?: Headers) => {
    return new Promise(async (resolve, reject) => {
      var options = {
        method: 'DELETE',
        uri: url,
        headers: headers,
        json: true,
        resolveWithFullResponse: true,
      };
      let result = new HttpResult();
      try {
        let tmp = await rp(options);
        result.statusCode = tmp.statusCode;
        result.headers = tmp.headers;
        result.body = tmp.body;
        resolve(result);
      } catch (error) {
        if (error.statusCode) {
          result.statusCode = error.statusCode;
          result.headers = error.response.headers;
          result.body = error.response.body;
          resolve(result);
        } else {
          reject(new Error('No standard http statusCode returned!'));
        }
      }
    });
  },
};
