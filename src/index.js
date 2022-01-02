const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const routes = require("./routes/index.routes");
const connectDB = require("./db");

// initialize server
const app = express();

// connect database
connectDB();

// engine handlebars
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayouts: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

// server on
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
