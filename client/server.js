const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routers/adminRouter");
const port = 5000;
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.status(200).send("Blog Backend Server!");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
