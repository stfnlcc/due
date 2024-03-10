const Artista = require("../model/artista.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getArtista = async (req, res, next) => {
  try {
    const id = req.params.id;
    const artista = await Artista.findById(id);
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: artista,
    });
  } catch (error) {
    next(error);
  }
};

// -- TODAS LOS CUADROS
const getArtistas = async (req, res, next) => {
  try {
    const artistas = await Artista.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: artistas,
    });
  } catch (error) {
    next(error);
  }
};

const createArtista = async (req, res, next) => {
  try {
    const artista = new Artista(req.body);
    await artista.save();
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: artista,
    });
  } catch (error) {
    next(error);
  }
};

// - MODIFICAR

const updateArtista = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const artista = await Artista.findByIdAndUpdate(id, body, { new: true });
    if (!artista) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: artista,
    });
  } catch (error) {
    next(error);
  }
};

// - DELETE

const deleteArtista = async (req, res, next) => {
  try {
    const id = req.params.id;
    const artista = await Artista.findByIdAndDelete(id);

    if (!artista) {
      return res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
        data: contributor,
      });
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: artista,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getArtista,
  getArtistas,
  createArtista,
  updateArtista,
  deleteArtista,
};
