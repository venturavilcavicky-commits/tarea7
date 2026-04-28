const express = require('express');
const app = express();

const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

console.log('✅ app cargado');

app.use('/clientes', clienteRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:3000');
});