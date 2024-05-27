import { Router } from "express";

// import data from "../data.js";
// import config from "../config.js";

const router = Router();

router.get("/products", (req, res) => {
  const data = ["flaco, ésta es la data, loco"];
  res.render("products", { data: data });
});
export default router;
