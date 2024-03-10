const Cuadro = require("../model/cuadro.model");
//const Contributor = require('../model/contributor.model');
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// FUNCIONES CRUD

// - CONSULTAR

// -- UNA CANCION
const getCuadro = async (req, res, next) => {
  try {
    //1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO
    const id = req.params.id;
    //2. BUSCO EN LA BBDD POR ID
    const cuadro = await Cuadro.findById(id).populate("artistas");
    //3. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: cuadro,
    });
  } catch (error) {
    next(error);
  }
};

// -- TODAS LAS CANCIONES
const getCuadros = async (req, res, next) => {
  try {
    //1. BUSCO TODAS LAS TRACKS
    const cuadros = await Track.find().populate("artistas");
    //2. RESPONDO AL USUARIO
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: tracks,
    });
  } catch (error) {
    next(error);
  }
};

// - CREAR

const createCuadro = async (req, res, next) => {
  try {
    //1. CREAR UNA VARIABLE (TIPO TRACK) QUE RECOJA LOS DATOS QUE ENVÍA EL USUARIO.
    const cuadro = new Cuadro(req.body);
    //2.GUARDAR EN BBDD
    await cuadro.save();
    //3. CONTESTAR AL USUARIO
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: cuadro,
    });
  } catch (error) {
    next(error);
  }
};

// - MODIFICAR

const updateCuadro = async (req, res, next) => {
  try {
    //1. BUSCAR EL TRACK QUE HAY QUE MODIFICAR.
    const id = req.params.id;
    //2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR
    const body = req.body;
    //3. ACTUALIZAR LA FUNCIÓN
    const cuadro = await Cuadro.findByIdAndUpdate(id, body, { new: true });
    // 4. RESPUESTA AL USUARIO
    if (!cuadro) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: cuadro,
    });
  } catch (error) {
    next(error);
  }
};

// - DELETE

const deleteCuadro = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cuadro = await Cuadro.findByIdAndDelete(id);

    if (!cuadro) {
      return res.status(404).json({ message: "Cuadro no encontrado" }); // esto sería un mensaje de error personalizado.
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: cuadro,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCuadro,
  getCuadros,
  createCuadro,
  updateCuadro,
  deleteCuadro,
};
