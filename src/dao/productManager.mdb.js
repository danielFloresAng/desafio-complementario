import productsModel from "./models/products.models.js";

class productManagerMdb {
  constructor() {
    this.products = productsModel;
  }

  getAllProducts = async () => {
    let allProducts = await this.products.find().lean();
    return allProducts;
  };

  async addProducts(newProduct) {
    await this.products.create(newProduct);
  }

  async getProductsById(itemId) {
    let productFiler = await this.products.findOne({
      _id: itemId,
    });

    return productFiler;
  }

  async updateProduct(itemId, property) {
    await this.products.findOneAndUpdate({ _id: itemId }, { $set: property });
  }

  deleteProduct = async (idDelete) => {
    await this.products.deleteOne({ _id: idDelete });
  };
}

export default productManagerMdb;
