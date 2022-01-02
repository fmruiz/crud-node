const express = require("express");
const routes = require("./routes/index.routes");

// initialize server
const app = express();

// middlewares
app.use(routes);

// server on
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
