import mongoose from "mongoose";

mongoose.pluralize(null);

const messagesCollection = "messages";

const messagesSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true }
});

const messagesModel = new mongoose.model(messagesCollection, messagesSchema);

export default messagesModel;
