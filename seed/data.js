import db from "../db/connection.js";
import House from "../models/Houses.js";
import Character from "../models/Characters.js";
import houses from "./houses.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  // Reset the database
  await db.dropDatabase();

  // Insert Data
  await Character.create(characters);
  await House.create(houses);

  console.log("Characters and Houses created!");

  // Close the DB
  await db.close();
};

insertData();
