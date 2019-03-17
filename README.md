# Express API

## Objectives

By the end of this, developers should be able to:

- Write five CRUD endpoints for an API resource using Express and Javascript.

## Preparation

1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Overview

According to its maintainers:

> Express is a minimal and flexible Node.js web application framework that
> provides a robust set of features for web and mobile applications.

Express, like Rails, can be used as an API. In fact, building APIs in Express, led to the rising popularity of Node.

Express can be used for full-stack applications (those that have server-rendered
views). However, we will use it purely as an API.

## Install Express

- https://expressjs.com/en/starter/installing.html

## Demo: "Hello World" API

- https://expressjs.com/en/starter/hello-world.html

Let's take a look at a super simple Express application. Open up
[examples/tiny_server.js](examples/tiny_server.js). This is a fully functional Express
API, in just four lines of code! We can run it like this:

```sh
node examples/tiny_server.js
```

And we can make a request to it by visiting `localhost:4741`

## Code-along: Library API

- https://expressjs.com/en/starter/basic-routing.html

Most apps need to do a bit more than always sending back "Hello world". To get
some more exposure to Express, let's build out a minimal API in
[examples/medium_size_server.js](examples/medium_size_server.js) that that we can
use to keep store books for a library. Because we haven't learned how
to integrate a database into Express yet, we'll just store our data in memory.

Our app will have three routes available:

- `GET /books`: respond with JSON of all books, like `index` in Rails.
- `GET /books/:id`: respond with JSON of one book, like `show` in Rails.
- `DELETE /books/:id`: delete book based on id, then respond with success.  We can not use the browser URL to test our delete requests so let's use an application [Postman](https://www.getpostman.com/) to do so.

Our API we'll need more functionality than the previous example. Still, we'll
recognize a lot of the same patterns. What were those `req` and `res` parameters
exactly?

**req**
`req` stands for request, and it contains lots of info about the incoming HTTP
request that the server receives. It contains things like the URI path, HTTP
headers, the HTTP verb (GET, POST, etc.), query parameters, parameters from
dynamic route segments, and more.

**res**
`res` stands for response. We use this object to put together a response, and
then we send that response with methods attached to this object. `res.json` signals to Express that we're done working on our response.
It's analogous to Rails' `render` method. If you don't use a **terminal
handler**, Express will keep the connection open waiting for one. You and
Express will both be frustrated and confused. Here's a list of terminal
handlers. You will use `res.json` and `res.sendStatus` most frequently.  Some of these
are:

| Response method      | What it means                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------|
| `res.json(jsObject)` | Send a JSON response.                                                                 |
| `res.redirect()`     | Redirect a request.                                                                   |
| `res.sendStatus()`   | Set the response status code and send its string representation as the response body. |

To get a little more specific, the `req` object is a
[http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
object. The `res` object is
[http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
object. Notice that the above links point to the NodeJS docs. These objects are
actually native to Node, not Express, Express uses them everywhere.

## Additional Resources

- [Express - Node.js web application framework](http://expressjs.com/)
- [Understanding Express.js](https://evanhahn.com/understanding-express/)
- [How body parser works](https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
