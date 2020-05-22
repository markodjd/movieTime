import * as webpack from "webpack";

export default {
  target: "web",
  node: {
    fs: "empty",
  },
} as webpack.Configuration;
