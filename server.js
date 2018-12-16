const express = require("express");

// Set Handlebars.
const exphbs = require("express-handlebars");

let PORT = process.env.PORT || 8013;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/portfolio_controller");

// Requiring our models for syncing
const db = require("./models");

app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ }).then( () => {
  app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
