const express = require("express");
const app = express();

const timeStamp = require("./routes/route");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api", timeStamp);

const port = 3000;

app.listen(port, () => {
  console.log("server is listening on port 3000...");
});
