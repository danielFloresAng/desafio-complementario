import { Router } from "express";

import productsModel from "../dao/models/products.models.js";
import config from "../config.js";
import dataTest from "../data.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  try {
    const allProducts = await productsModel.find().lean();
    // const test = dataTest

    res.status(200).send({ origin: config.SERVER, playload: allProducts });
    // res.status(200).send({origin: config.SERVER, playload: dataTest })
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, error: error.message });
  }
});
// productsRouter.put("/", async (req, res) => {
//   try {
//   } catch {}
// });
// productsRouter.post("/", async (req, res) => {
//   try {
//   } catch {}
// });
// productsRouter.delete("/", async (req, res) => {
//   try {
//   } catch {}
// });

export default productsRouter;
