import mongoose from "mongoose";

mongoose.pluralize(null);

const messagesCollection = "messages";

const messagesSchema = new mongoose.Schema({});

const messagesModel = new mongoose.model(messagesCollection, messagesSchema);

export default messagesModel;
