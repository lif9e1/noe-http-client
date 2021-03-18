# NOE-HTTP-Client

NOE-HTTP-Client = "NO Exception HTTP client".

This is a simple wrapper for module 'Request-Promise'. It suppresses the exception throwing in case of HTTP status Code greater than 400.

## When you need this module?

Actually you don't need this module. With modules like "Request-Promise", you are able to make whatever HTTP-calls you like. The only downside of this approach is that you need to handle exceptions in case the return code is >= 400. While 401 or 403 makes sense for an exception, handle 404 is absolutely annoying, because semantically you can't say that it is an exception and I really hate to handle the exception if nothing is found in the database.

Another situation where I need a "no execption HTTP client" is to make HTTP calls within array.map, at latest when you call Promise.all() you'd better pray that every statusCode of the HTTP call is less than 400. You may argue that there are frameworks like "Q" which can help with this, but it is another dependency, isn't it?

This simple wrapper has been packaged als npm package and can be installed per command `npm i noe-http-client`

## Installation

```js
npm install noe-http-client
```

## Usage and Data Structure

In its simplest case, you can use the module like following:

```js
import { agent } from 'noe-http-client';
agent.get('https://www.google.com/test1234').then((res) => console.log(res));
```

The result will look like this:

```json
HttpResult {
  statusCode: 404,
  headers:
   { 'content-type': 'text/html; charset=UTF-8',
     'referrer-policy': 'no-referrer',
     'content-length': '1569',
     date: 'Wed, 13 Feb 2019 21:21:10 GMT',
     'alt-svc': 'quic=":443"; ma=2592000; v="44,43,39"',
     connection: 'close' },
  body:
   '<!DOCTYPE html>\n<html lang=en> .....</html>\n' }

```

Please check the source code for more details description of the usage.

## Source Code

Source code can be found at `https://github.com/lif9e1/noe-http-client`. Feel free to fork and contribute!
