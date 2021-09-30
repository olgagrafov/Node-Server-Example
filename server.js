const express = require("express");
const matchesRoute = require("./route/teams");
const tournamentsRoute = require("./route/tournaments");

const app = express();
//app.use(express.json());

app.use("/teams", matchesRoute);

app.use("/tournaments", tournamentsRoute);

app.use((request, response) => {
    response.statusCode = 404;
    response.send("Invalid Request");
  });
  
app.listen(8000, () => {
    console.log("Server Started...");
  });
  