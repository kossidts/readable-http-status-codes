# readable-http-status-codes

[![License][license-image]][license-url] [![NPM Package Version][npm-image-version]][npm-url] ![GitHub top language][language-image] ![Size][size-image] ![Last Commit][commit-image]

By writing readable http status codes your code becomes even more readable and easier to understand.

> Some status codes are for most developers clear e.g. `200`, `404` or `500`. But few developers can tell what `402`, `426` or `501` means without looking up. Writing codes that require someone reading it to stop and look something up, should be avoided whenever possible.

This package provides you the full list ([see below](#list-of-all-keys)) of all http status codes available on the nodejs core module **http**. So you can write

`PAYMENT_REQUIRED` or `PAYMENT_REQUIRED_CODE` instead of 402

`UPGRADE_REQUIRED` or `UPGRADE_REQUIRED_CODE` instead of 426

`NOT_IMPLEMENTED` or `NOT_IMPLEMENTED_CODE` instead of 501

`IM_A_TEAPOT` or `IM_A_TEAPOT_CODE` instead of 418

...

And to retrieve the status messages use

`PAYMENT_REQUIRED_TEXT` to return `Payment Required`

`UPGRADE_REQUIRED_TEXT` to return `Upgrade Required`

`NOT_IMPLEMENTED_TEXT` to return `Not Implemented`

`IM_A_TEAPOT_TEXT` to return `I'm a Teapot`

...

## Installation

```bash
$ npm i readable-http-status-codes
```

## Usage

##### Require CommonJS (default)

```js
const status_codes = require("readable-http-status-codes");
```

##### Import ES-Module (default)

```js
import status_codes from "readable-http-status-codes";
```

##### Import ES-Module (named)

```js
import { readable_http_status_codes as status_codes } from "readable-http-status-codes";
```

##### Some examples based on express

```js
res.status(status_codes.OK).json({
    /* data */
});
```

```js
res.sendStatus(status_codes.BAD_REQUEST);
```

```js
res.sendStatus(status_codes.NO_CONTENT);
```

### List of all keys

It is the full list of all HTTP status codes provided by nodejs core module **http**.

| KEY                             | Code |
| ------------------------------- | ---- |
| CONTINUE                        | 100  |
| SWITCHING_PROTOCOLS             | 101  |
| PROCESSING                      | 102  |
| EARLY_HINTS                     | 103  |
| OK                              | 200  |
| CREATED                         | 201  |
| ACCEPTED                        | 202  |
| NON_AUTHORITATIVE_INFORMATION   | 203  |
| NO_CONTENT                      | 204  |
| RESET_CONTENT                   | 205  |
| PARTIAL_CONTENT                 | 206  |
| MULTI_STATUS                    | 207  |
| ALREADY_REPORTED                | 208  |
| IM_USED                         | 226  |
| MULTIPLE_CHOICES                | 300  |
| MOVED_PERMANENTLY               | 301  |
| FOUND                           | 302  |
| SEE_OTHER                       | 303  |
| NOT_MODIFIED                    | 304  |
| USE_PROXY                       | 305  |
| TEMPORARY_REDIRECT              | 307  |
| PERMANENT_REDIRECT              | 308  |
| BAD_REQUEST                     | 400  |
| UNAUTHORIZED                    | 401  |
| PAYMENT_REQUIRED                | 402  |
| FORBIDDEN                       | 403  |
| NOT_FOUND                       | 404  |
| METHOD_NOT_ALLOWED              | 405  |
| NOT_ACCEPTABLE                  | 406  |
| PROXY_AUTHENTICATION_REQUIRED   | 407  |
| REQUEST_TIMEOUT                 | 408  |
| CONFLICT                        | 409  |
| GONE                            | 410  |
| LENGTH_REQUIRED                 | 411  |
| PRECONDITION_FAILED             | 412  |
| PAYLOAD_TOO_LARGE               | 413  |
| URI_TOO_LONG                    | 414  |
| UNSUPPORTED_MEDIA_TYPE          | 415  |
| RANGE_NOT_SATISFIABLE           | 416  |
| EXPECTATION_FAILED              | 417  |
| IM_A_TEAPOT                     | 418  |
| MISDIRECTED_REQUEST             | 421  |
| UNPROCESSABLE_ENTITY            | 422  |
| LOCKED                          | 423  |
| FAILED_DEPENDENCY               | 424  |
| TOO_EARLY                       | 425  |
| UPGRADE_REQUIRED                | 426  |
| PRECONDITION_REQUIRED           | 428  |
| TOO_MANY_REQUESTS               | 429  |
| REQUEST_HEADER_FIELDS_TOO_LARGE | 431  |
| UNAVAILABLE_FOR_LEGAL_REASONS   | 451  |
| INTERNAL_SERVER_ERROR           | 500  |
| NOT_IMPLEMENTED                 | 501  |
| BAD_GATEWAY                     | 502  |
| SERVICE_UNAVAILABLE             | 503  |
| GATEWAY_TIMEOUT                 | 504  |
| HTTP_VERSION_NOT_SUPPORTED      | 505  |
| VARIANT_ALSO_NEGOTIATES         | 506  |
| INSUFFICIENT_STORAGE            | 507  |
| LOOP_DETECTED                   | 508  |
| BANDWIDTH_LIMIT_EXCEEDED        | 509  |
| NOT_EXTENDED                    | 510  |
| NETWORK_AUTHENTICATION_REQUIRED | 511  |

## License

See [LICENSE][license-url].

## Copyright

Copyright &copy; 2022. Kossi D. T. Saka.

[npm-image-version]: https://img.shields.io/npm/v/readable-http-status-codes.svg
[npm-image-downloads]: https://img.shields.io/npm/dm/readable-http-status-codes.svg?color=purple
[npm-url]: https://npmjs.org/package/readable-http-status-codes
[license-image]: https://img.shields.io/github/license/kossidts/readable-http-status-codes
[license-url]: https://github.com/kossidts/readable-http-status-codes/blob/master/LICENSE
[language-image]: https://img.shields.io/github/languages/top/kossidts/readable-http-status-codes?color=yellow
[size-image]: https://img.shields.io/github/repo-size/kossidts/readable-http-status-codes?color=light
[commit-image]: https://img.shields.io/github/last-commit/kossidts/readable-http-status-codes
[actions-url]: https://github.com/kossidts/readable-http-status-codes/actions
[workflow-image]: https://github.com/kossidts/readable-http-status-codes/actions/workflows/node.js.yml/badge.svg
[workflow-image-2]: https://github.com/kossidts/readable-http-status-codes/workflows/Node.js%20CI/badge.svg
