Express Directions - Part 2
===========================

Once you have got your app up and running with the 'Hello World', you are ready to continue on to Part 2.

1. In your package.json file, add the following to your dependencies:
  * Morgan
  * Body Parser
  * Jade
  * Cookie Parser

```js
{
  "name": "express-sample-project",
  "main": "server.js",
  "dependencies": {
    "express": "~4.0.0",
    "morgan": "~1.0.0",
    "cookie-parser": "~1.0.1",
    "body-parser": "~1.0.0",
    "jade": "~1.3.0"
  }
}
```

2. In the terminal (command line), run the following command (again):

```
npm install
```

3. In your project's root folder, create a views folder. Within the views folder, create an index.jade file.

```
mkdir views
cd views
touch index.jade
```

4. Update your server.js file.

```js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

var server = app.listen(3000, function() {
  var port = server.address().port;

  console.log('This wicked cool app is listening at: ' + port);
});
```

5. In your index.jade file, add the following code:

```jade
h1 Hello Universe!
```

6. Start up your server.

```
node server.js
```

7. In your browser window, navigate to http://localhost:3000