import path from "path";

const config = {
  SERVER: "Atlas",
  PORT: 8080,
  DIRNAME: path.dirname(
    new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, "$1")
  ),
  get UPLOAD_DIR() {
    return `${this.DIRNAME}/public/img`;
  },
  MONGODB_URI:
    "mongodb+srv://danns1125:E-commerce@e-commerce-coder.ksbwadq.mongodb.net/ecommerce",
  MONGODB_ID_REGEX: /^[a-fA-F0-9]{24}$/,
};

export default config;
