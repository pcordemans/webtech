const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

//home page
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Hello World!");
});

//custom 404 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server error");
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});
