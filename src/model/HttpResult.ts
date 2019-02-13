export interface Headers {
  [name: string]: string;
}

export class HttpResult {
  statusCode: number;
  headers: Headers;
  body: any;
}
