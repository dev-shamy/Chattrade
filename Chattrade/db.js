const mongoos = require("mongoose");

const connectDatabase = () => {
  try {
    mongoos.connect(`${process.env.DATABASE_URL}/testProject`);
    console.log("database connnection established...");
  } catch (error) {
    console.log("error in data base connections: ", error);
  }
};

module.exports = connectDatabase;
