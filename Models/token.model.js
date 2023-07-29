const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  username: { type: String, required: true },
  number: { type: Number, required: true },
  token: { type: String, required: true },
});

const tokenModel = mongoose.model("user", tokenSchema);

module.exports = {
  tokenModel,
};
