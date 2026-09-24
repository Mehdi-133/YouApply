import express from "express";
import offerRoutes from "./routes/offerRoutes.js";
import { urlencoded } from "body-parser";

const app = express();
const PORT = 3000;

import methodOverride from "method-override";

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(urlencoded({ extended: true }));

app.use("/", offerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
