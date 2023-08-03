import db from "../db/connection.js";
import Game from "../models/Game.js";

const insertData = async () => {
  // Reset the database
  await db.dropDatabase();

  const games = [
    {
      name: "Grand Theft Auto",
      type: "role-playing",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Grand_Theft_Auto_logo_series.svg/1920px-Grand_Theft_Auto_logo_series.svg.png",
      rating: "mature",
      price: 60,
      system: "all",
      description: "Gameplay focuses on an open world where the player can complete missions to progress an overall story, as well as engage in various side activities. Most of the gameplay revolves around driving and shooting, with occasional role-playing and stealth elements.",
    },
    {
      name: "Call of Duty",
      type: "action",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Call_of_Duty_logo_2023.svg/2560px-Call_of_Duty_logo_2023.svg.png",
      rating: "mature",
      price: 60,
      system: "all",
      description: "Call of Duty is a first-person shooter video game based on id Tech 3, and was released on October 29, 2003. The game was developed by Infinity Ward and published by Activision. The game simulates the infantry and combined arms warfare of World War II.",
    },
    {
      name: "Fortnite",
      type: "action",
      image: "https://images.wikia.com/fortnite_gamepedia/images/b/bc/Wiki.png",
      rating: "mature",
      price: 60,
      system: "all",
      description: "Fortnite is a massive online shooter game developed by Epic Games in 2017. It comes in 3 Game Modes : Save the World, Battle Royale and Creative. Battle Royale and Creative are available on Playstation, Xbox, Nintendo Switch and PC. The game mode Save the World is only on PC and Console Platforms.",
    },
    {
      name: "The Legend of Zelda",
      type: "role-playing",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Zelda_2017.svg/2560px-Zelda_2017.svg.png",
      rating: "everyone",
      price: 60,
      system: "Switch",
      description: "The series centers on the various incarnations of Link, a courageous young man of the elf-like Hylian race, and Princess Zelda, a magical princess who is the mortal reincarnation of the goddess Hylia, as they fight to save the magical land of Hyrule from Ganon, an evil warlord turned demon king, who is the principal antagonist of the series. ",
    },
    {
      name: "Super Smash Bros.",
      type: "action",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Super_Smash_Bros_2018_logo.svg/2560px-Super_Smash_Bros_2018_logo.svg.png",
      rating: "everyone",
      price: 60,
      system: "Switch",
      description: "Super Smash Bros. is a crossover fighting game series published by Nintendo. The series was created by Masahiro Sakurai, who has directed every game in the series. The series is known for its unique gameplay objective which differs from that of traditional fighters, in that the aim is to increase damage counters and knock opponents off the stage instead of depleting life bars.",
    }
  ]

  // Insert Data
  await Game.insertMany(games)

  console.log("Games created!");

  // Close the DB
  await db.close();
};

insertData();