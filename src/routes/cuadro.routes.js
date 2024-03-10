const express = require("express");
//EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS.
const cuadroRouter = express.Router();
//INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const {
  getCuadro,
  getCuadros,
  createCuadro,
  updateCuadro,
  deleteCuadro,
} = require("../controller/cuadro.controller");

const { isAuth } = require("../middlewares/auth.middleware");

// LAS RUTAS
//nombreDelRouter.get('endpoint', <nombreDeLaFuncion>);

//OBTENER UNA CANCIÓN
cuadroRouter.get("/:id", getCuadro);

//OBTENER TODAS LAS CANCIONES
cuadroRouter.get("/", getCuadros);

//CREAR UNA CANCIÓN
cuadroRouter.post("/", [isAuth], createCuadro);

//UPDATE
cuadroRouter.patch("/:id", [isAuth], updateCuadro);

//DELETE
cuadroRouter.delete("/:id", [isAuth], deleteCuadro);

module.exports = cuadroRouter;
