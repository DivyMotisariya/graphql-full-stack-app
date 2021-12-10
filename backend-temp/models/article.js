const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Enter Article Title"],
    },
    body: {
      type: String,
      required: [true, "Enter Article Body"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("article", articleSchema);
