![cf](http://i.imgur.com/7v5ASc8.png) HTTP and REST
========================================================

## Learning Objectives

**Students will be able to ...**

* Describe the full WRRC
* Identify Clients and Servers
* Describe the operations of HTTP
  * Verbs
  * Status Codes
  * Headers
  * Requests and Responses
* Describe REST
  * Supported Verbs
  * Usage of HTTP
  * What is a resource?
  * What is an API?


## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review** 
* :15 **Lightning Talk** 
* Break 
* :30 **CS/UI Concepts** -
* :20 **Code Review** 
* Break
* :60 **Main Topic**

## Computer Science Concept:
## UI Concept:
* Navigation

## Resources
* [json server](https://github.com/typicode/json-server)

## HTTP
### [HTTP](https://tools.ietf.org/html/rfc7231)
The Hyper Text Transfer Protocol (HTTP) is a stateless request-response application layer protocol. HTTP is used to build distributed, collaborative, hypermedia information systems. HTTP is the foundation for the world wide web. Applications built using HTTP subscribe to the client-server computing model. In the client-server computing model a host designed to provide a service is called a server. Clients are hosts that make requests to that service. The HTTP specification defines how requests and responses should be formatted, but not what a service should represent. HTTP is often associated with serving `.html` files but is also used to transfer images, videos, `.json`, `.xml`, binary executables, and much more.

### HTTP Requests
A HTTP/1.1 request is formatted in text and transferred using TCP. The first line of the request contains the `METHOD`, `URL`, and `HTTP VERSION`. The following lines are the request `HEADERS`. Each header is separated by a newline character. A header is a key value pair separated using a colon. Headers containing more than one value separate each value using a semicolon. The header section of the request is terminated with an empty line. An optional body follows the header section.


|HTTP Method	| Request Has Body	| Response Has Body |	Safe	| Idempotent	| Cacheable | Function |
| --- | --- | --- | --- | --- | --- | --- |
| GET	    | No	      | Yes	| Yes | Yes	| Yes | Retrieve a resource |
| HEAD	  | No	      | No	| Yes | Yes	| Yes | Like GET but headers only |
| POST	  | Yes	      | Yes	| No	| No	| Yes | Create a resource |
| PUT	    | Yes	      | Yes	| No	| Yes	| No | Update a resource |
| DELETE	| No	      | Yes	| No	| Yes	| No | Delete a resource |
| CONNECT	| Yes	      | Yes	| No	| No	| No | Create TCP/IP tunnel |
| OPTIONS	| Optional	| Yes	| Yes | Yes	| No | Returns supported methods for a URL |
| TRACE 	| No	      | Yes	| Yes | Yes	| No | Echos retrieved request |
| PATCH  	| Yes	      | Yes	| No	| No	| No | Partial modification of resource |

`Safe` methods should only be used for information retrieval and should not change the server state.
`Idempotent` methods means if two identical requests are made they should get an identical response.
`Cacheable` means the client should be able to cache the response.

##### Example HTTP Request
```
POST /api/note HTTP/1.1
Host: api.example.com
Origin: www.example.com
Authorization: Bearer bHVsIHRoaXMgaXMgYSBmYWtlIHNlY3JldCB0b2tlbg==
Accept: application/json
Content-Type: application/json; charset=UTF-8
Content-Length: 58

{"title":"kata","content":"get 100 points on hacker rank"}
```

### HTTP Response
A HTTP/1.1 response is also formatted in text and transferred using TCP. The first line of the response contains the `HTTP VERSION`, `STATUS CODE`, and `STATUS MESSAGE`. The following lines are the request headers and are formatted exactly the same way as the request headers. The header section of the request is terminated with an empty line. An optional body follows the header section.

##### Example HTTP Response
```
HTTP/1.1 200 OK
Date: Tue, 22 Aug 2017 06:34:16 GMT
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 82
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Connection: close

{"id":"1234123412341324","title":"kata","content":"get 100 points on hacker rank"}
```
