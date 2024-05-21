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
    "mongodb+srv://coder_53160:coder2024@clustercoder.sxqjiud.mongodb.net/coder_53160",
};

export default config;
