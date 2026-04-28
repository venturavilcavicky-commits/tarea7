const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { usuario, password } = req.body;

  if (usuario === 'admin' && password === '1234') {
    const token = jwt.sign(
      { usuario },
      'clave_secreta',
      { expiresIn: '1h' }
    );

    return res.json({
      mensaje: 'Login correcto',
      token
    });
  }

  res.status(401).json({
    mensaje: 'Usuario o contraseña incorrectos'
  });
};