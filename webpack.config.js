const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "updated-object-diff.js",
    globalObject: "this",
    library: {
      name: "updatedObjectDiff",
      type: "umd",
    },
  },
};
