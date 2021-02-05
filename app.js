const routes = require('./controllers/patty_controller');
const exphbs = require("express-handlebars");
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Change the view engine to use HandlebarsJS.
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Let express know about the routes to use.
app.use(routes);

const PORT = process.env.PORT || 3000;
// const IP = process.env.IP || '127.0.0.1'; // Optional, But good to have
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is listening on port: ${PORT} - http://localhost:${PORT}`);
    }
});