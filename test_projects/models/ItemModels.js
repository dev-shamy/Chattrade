const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  roll: {
    type: Number,
    require: true,
    unique: true,
  },
  department: {
    type: String,
    require: true,
  },
});

const Item = mongoose.model("Items", ItemsSchema);

module.exports = Item;
