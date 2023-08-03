import { Router } from "express";
import gamesRoutes from "./games.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/games", gamesRoutes);

export default router;
