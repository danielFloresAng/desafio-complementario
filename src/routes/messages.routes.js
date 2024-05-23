import { Router } from "express";

import messagesModel from "../dao/models/messages.model.js";

const messagesRouter = new Router();

messagesRouter.post("/", async (req, res) => {
  let messages = await messagesModeldb.collection_name.insertOne({user:'',message:''})

  res.send()

});

export default messagesRouter;
