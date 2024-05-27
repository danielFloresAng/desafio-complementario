import path from "path";
import * as url from "url";

const config = {
  SERVER: "Atlas",
  PORT: 8080,

  DIRNAME: url.fileURLToPath(new URL(".", import.meta.url)),
  get UPLOAD_DIR() {
    return `${this.DIRNAME}/public/img`;
  },
  MONGODB_URI:
    "mongodb+srv://danns1125:E-commerce@e-commerce-coder.ksbwadq.mongodb.net/ecommerce",
  MONGODB_ID_REGEX: /^[a-fA-F0-9]{24}$/,
};

export default config;

/**  DIRNAME: path.dirname(
    new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, "$1")
  ), // Win
  get UPLOAD_DIR() {
    return `${this.DIRNAME}/public/img`;
  },*/
