export interface Headers {
  [name: string]: string;
}

export class HttpResult {
  statusCode: number;
  headers: Headers;
  body: any;
}

export interface HttpAgent {
  GET?: string;
  POST?: string;
  PUT?: string;
  DELETE?: string;
  PATCH?: string;
  HEAD?: string;
}
