const url = require('url');
const query = require('querystring');

var req_url = "https://onemoon.com?hello=world&this=is&query=string";
// req.url 로 대체될 수 있다.

const req_url_parse = url.parse(req_url);
const req_url_format = url.format(req_url_parse);

console.log('parse : ',req_url_parse);
console.log('format : ',req_url_format);
// url 자체를 나누고 합치는 역할

// querystring 모듈을 통해서 query 문 컨트롤
const req_query = query.parse(req_url_parse.query);

console.log('q _ parse' , req_query);

let new_url = {hello:"world" , hello2:'onemoon'};
const new_query = query.stringify(new_url);

console.log('q _ stringify ',new_query);

// parse : Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'onemoon.com',
//     port: null,
//     hostname: 'onemoon.com',
//     hash: null,
//     search: '?hello=world&this=is&query=string',
//     query: 'hello=world&this=is&query=string',
//     pathname: '/',
//     path: '/?hello=world&this=is&query=string',
//     href: 'https://onemoon.com/?hello=world&this=is&query=string' }

//   format :       https://onemoon.com/?hello=world&this=is&query=string

//   q _ parse      { hello: 'world', this: 'is', query: 'string' }

//   q _ stringify  hello=world&hello2=onemoon