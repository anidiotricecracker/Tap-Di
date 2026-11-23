const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 4001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "resources", "views", "layouts"),
    partialsDir: path.join(__dirname, "resources", "views", "partials"),
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
const indexRouter = require("./routes/index");
const bookRoutes = require('./routes/bookRoutes');
app.use("/", indexRouter);
app.use('/books', bookRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

