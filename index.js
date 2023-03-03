import express from "express";

const app = express();
const PORT = 5000;

import route from "./routes/user.route.js";

app.use("/user", route);

app.listen(PORT, () => {
  console.log("sua aplicação está no ar!");
});
