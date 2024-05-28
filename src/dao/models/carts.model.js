import mongoose from "mongoose";

mongoose.pluralize(null)

const cartsCollection = 'carts'

const cartsSchema = new mongoose.Schema({
  products:{type: String, required: true}
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema)

export default cartsModel