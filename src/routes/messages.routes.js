import { Router } from "express";

// import messagesModel from "../dao/models/messages.model.js";

const messagesRouter = new Router();

messagesRouter.get("/", async (req, res) => {
  try {
    res.status(200).send({ status: "GET" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});
messagesRouter.post("/", async (req, res) => {
  try {
    res.status(200).send({ status: "POST" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});
messagesRouter.put("/", async (req, res) => {
  try {
    res.status(200).send({ status: "PUT" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});
messagesRouter.delete("/", async (req, res) => {
  try {
    res.status(200).send({ status: "DELETE" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

export default messagesRouter;
