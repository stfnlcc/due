const mongoose = require("mongoose");

const cuadroSchema = new mongoose.Schema({
  isrc: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  artistas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artista",
    },
  ],
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  lineCYear: {
    type: Number,
    required: true,
    trim: true,
  },
  lineCPublisher: {
    type: String,
    required: true,
    trim: true,
  },
});

const Cuadro = mongoose.model("Cuadro", cuadroSchema);

module.exports = Cuadro;
