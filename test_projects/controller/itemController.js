const {
  insertItems,
  updateItem,
  getItemsByUserId,
  getAllItems,
  deleteItemById,
} = require("../DOA/queries");

const { decodeToken } = require("../utills/jwtToken");

const addItems = async (req, res) => {
  try {
    const { name, roll, department } = req.body;
    if (
      name.trim().length === 0 ||
      department.trim().length === 0 ||
      roll.length === 0
    ) {
      return res.status(422).json({ message: "all fields are required..." });
    }

    const tokenDetails = decodeToken(req.token);
    const item = await insertItems(tokenDetails, req.body);
    if (item.message)
      return res.status(422).json({ message: "item not inserte", item: item });

    return res.status(200).json({ message: "item Inserted", item: item });
  } catch (error) {
    console.log("error at add item: ", error);
    return res
      .status(500)
      .json({ message: "Internel server error", Error: error });
  }
};

const updateItems = async (req, res) => {
  try {
    const { Id } = req.params;

    const item = await updateItem(Id, req.body);

    if (item.message) {
      return res
        .status(404)
        .json({ message: "item not found", Error: item.message });
    }

    return res.status(200).json({ message: "item updated successfully.." });
  } catch (error) {
    console.log("error at update item: ", error);
    return res
      .status(500)
      .json({ message: "Internel server error", Error: error });
  }
};

const getAll = async (req, res) => {
  try {
    const items = await getAllItems();
    return res.status(200).json({
      message: "data fetch successfully",
      data: items,
      "total items": items?.length,
    });
  } catch (error) {
    console.log("error at get all item: ", error);
    return res
      .status(500)
      .json({ message: "Internel server error", Error: error });
  }
};

const getUserItems = async (req, res) => {
  try {
    const { token } = req;
    const data = decodeToken(token);
    const items = await getItemsByUserId(data.userId);
    return res.status(200).json({
      message: "data fetched successfully",
      data: items,
      "total items": items?.length,
    });
  } catch (error) {
    console.log("error at get item by user Id: ", error);
    return res
      .status(500)
      .json({ message: "Internel server error", Error: error });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { Id } = req.params;
    await deleteItemById(Id);
    return res.status(200).json({ message: "item deleted successfully..." });
  } catch (error) {
    console.log("error at delete item: ", item);
    return res
      .status(500)
      .json({ message: "Internel server error", Error: error });
  }
};

module.exports = {
  addItems,
  updateItems,
  getUserItems,
  deleteItem,
  getAll,
};
