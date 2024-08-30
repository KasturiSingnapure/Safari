if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/safari";
// const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL); //MONGO_URL //`${dbUrl}`
}

const initDB = async () => {
  // await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66c65e1dd5ec32505ff45275",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialzed");
};

initDB();

//user= kasturi
//password = hello
