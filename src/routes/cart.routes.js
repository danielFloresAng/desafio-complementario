import { Router } from "express";

import cartManagerMdb from "../dao/cartsManagerMdb.js";

const cartRouter = Router();
const manager = new cartManagerMdb()

// GET para traer todos los carritos
cartRouter.get("/", async (req, res) => {
  try {
    res.status(200).send({ status: "GET" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

// POST para agregar carritos
cartRouter.post("/addCart", async (req, res) => {
  try {
    res.status(200).send({ status: "POST" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

// PUT para actualizar carritos
cartRouter.put("/updateCart", async (req, res) => {
  try {
    res.status(200).send({ status: "PUT" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

// DELETE para eliminar carritos
cartRouter.delete("/deleteCart/:cid", async (req, res) => {
  try {
    res.status(200).send({ status: "DELETE" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

export default cartRouter;
