const User = require("../models/userModels");
const Item = require("../models/ItemModels");
const { ObjectId } = require("mongodb");

const saveUser = async (payload) => {
  try {
    const newUser = new User(payload);
    const userData = await newUser.save();
    return userData;
  } catch (error) {
    return { message: `error at save user${error}` };
  }
};

const findByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    return { message: `error at find by email ${error}` };
  }
};

const findByUserName = async (username) => {
  try {
    const user = await User.findOne({ userName: username });
    return user;
  } catch (error) {
    console.log("error at find by username: ", error);
  }
};

const insertItems = async (tokenDetails, payload) => {
  try {
    payload.userId = tokenDetails.userId;
    const newItem = new Item(payload);
    const insertedItem = await newItem.save();
    return insertedItem;
  } catch (error) {
    return { message: `error at insert item ${error}` };
  }
};

const updateItem = async (Id, data) => {
  try {
    const item = await Item.findByIdAndUpdate(Id, { $set: { ...data } });
    return item;
  } catch (error) {
    return { message: `error at update item ${error}` };
  }
};

const getItemsByUserId = async (userId) => {
  try {
    const items = await Item.find({ userId: userId });
    return items;
  } catch (error) {
    return { message: `error at get item by user Id ${error}` };
  }
};

const getAllItems = async () => {
  try {
    const data = await Item.find({});
    return data;
  } catch (error) {
    return { message: `error at get all item ${error}` };
  }
};

const deleteItemById = async (id) => {
  try {
    const objectId = new ObjectId(id);
    const item = await Item.deleteOne({ _id: objectId });
    return item;
  } catch (error) {
    console.log("Error: ", error);
    return { message: `error at delete item by Id${error}` };
  }
};

module.exports = {
  saveUser,
  findByEmail,
  insertItems,
  updateItem,
  getItemsByUserId,
  deleteItemById,
  getAllItems,
  findByUserName,
};
