import { Router } from "express";

const cartRouter = new Router();

cartRouter.get("/", async (req, res) => {
  try {
    res.status(200).send({ status: "GET" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});
cartRouter.post("/", async (req, res) => {
  try {
    res.status(200).send({ status: "POST" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});
cartRouter.put("/", async (req, res) => {
  try {
    res.status(200).send({ status: "PUT" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});
cartRouter.delete("/", async (req, res) => {
  try {
    res.status(200).send({ status: "DELETE" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

export default cartRouter;
