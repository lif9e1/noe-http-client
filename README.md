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
agent.get('https://www.google.com/test1234').then(res => console.log(res));
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
   '<!DOCTYPE html>\n<html lang=en>\n  <meta charset=utf-8>\n  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">\n  <title>Error 404 (Not Found)!!1</title>\n  <style>\n    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}\n  </style>\n  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>\n  <p><b>404.</b> <ins>That’s an error.</ins>\n  <p>The requested URL <code>/test1234</code> was not found on this server.  <ins>That’s all we know.</ins>\n' }

```

Please check the source code for more details description of the usage.

## Source Code

Source code can be found at `https://github.com/lif9e1/noe-http-client`. Feel free to fork and contribute!
