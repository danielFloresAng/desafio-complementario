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
  b;
});
productsRouter.post("/", async (req, res) => {
  try {
    res.status(200).send({ status: "on", playload: "POST" });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, error: error.message });
  }
});
productsRouter.put("/", async (req, res) => {
  try {
    res.status(200).send({ status: "on", playload: "PUT" });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, error: error.message });
  }
});
productsRouter.delete("/", async (req, res) => {
  /* const filter = { _id: req.params.id };
  const deleteProduct = await productsModel.findOneAndDelete(filter);

  res.send({ origin: config.SERVER, playload: deleteProduct }); */
  try {
    res.status(200).send({ status: "on", playload: "DELETE" });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, error: error.message });
  }
});

export default productsRouter;
