var url = require('url');

var href = 'https://nodejs.org/docs/v6.11.3/api/url.html?name=jlt&age=18&extra=hahaha';
var hrefNoPro = '//nodejs.org/docs/v6.11.3/api/url.html'
var urlObject = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'nodejs.org',
    port: null,
    hostname: 'nodejs.org',
    hash: null,
    search: '?name=jlt&age=18&extra=hahaha',
    query: { name: 'jlt', age: '18', extra: 'hahaha' },
    pathname: '/docs/v6.11.3/api/url.html',
    path: '/docs/v6.11.3/api/url.html?name=jlt&age=18&extra=hahaha',
    href: 'https://nodejs.org/docs/v6.11.3/api/url.html?name=jlt&age=18&extra=hahaha' 
}

console.log(url.parse(href))
console.log(url.parse(href, true))
console.log(url.parse(hrefNoPro, false, true))
console.log(url.parse(hrefNoPro, false, false))

console.log(url.format(urlObject))

console.log(url.resolve(href, '/hehehe'))
console.log(url.resolve(href, 'hehehe'))