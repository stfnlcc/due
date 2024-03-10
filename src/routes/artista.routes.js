const express = require("express");
const artistaRouter = express.Router();
const {
  getArtista,
  getArtistas,
  createArtista,
  updateArtista,
  deleteArtista,
} = require("../controller/artista.controller");

const { isAuth } = require("../middlewares/auth.middleware");

artistaRouter.get("/:id", getArtista);
artistaRouter.get("/", getArtista);
artistaRouter.post("/", [isAuth], createArtista);
artistaRouter.patch("/:id", [isAuth], updateArtista);
artistaRouter.delete("/:id", [isAuth], deleteArtista);

module.exports = artistaRouter;
