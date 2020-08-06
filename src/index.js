const express = require("express");
const engine = require('ejs-mate');
const path = require('path');


//initialization
const app = express();

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//routes
app.use(require('./routes/routes.js'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


//starting server
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Servidor inicializado en puerto ${port}`);
});
