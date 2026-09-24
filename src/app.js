import express from "express";
import offerRoutes from "./routes/offerRoutes.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use("/offers", offerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
