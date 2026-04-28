const Cliente = require('../models/cliente');

exports.crearCliente = async (req, res) => {
  try {
    const { nombre, correo, telefono } = req.body;

    const nuevoCliente = await Cliente.create({
      nombre,
      correo,
      telefono
    });

    res.status(201).json({
      mensaje: 'Cliente creado correctamente',
      cliente: nuevoCliente
    });

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al crear cliente',
      error: error.message
    });
  }
};