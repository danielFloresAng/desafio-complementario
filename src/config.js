import path from "path";

const config = {
  SERVER: "Local",
  PORT: 8080,
  DIRNAME: path.dirname(
    new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, "$1")
  ), // Win
  get UPLOAD_DIR() {
    return `${this.DIRNAME}/public/img`;
  },
  MONGODB_URI:
  "mongodb+srv://danns1125:E-commerce@e-commerce-coder.ksbwadq.mongodb.net/users_aggregate?retryWrites=true&w=majority",
};

export default config;
