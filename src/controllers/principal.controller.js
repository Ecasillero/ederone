const principalCtrl = {};
const Sensor = require("../models/Sensor");

principalCtrl.registrarsensor =  (req, res) => {
  res.render('principal/registrarr');
};

principalCtrl.listarsensores = async (req, res) => {
  const listadosensores = await Sensor.find();
  console.log(listadosensores)
  res.render('principal/lista',(listadosensores))
};
principalCtrl.guardarsensor = async (req, res) => {
const {
 nombre,
 ubicacion, 
 tipo,
 latitud,
 longitud

 } = req.body;
 

  const errors = [];
  if (!nombre) {
    errors.push({ text: "Por favor indique Nombre del sensor" });
  }
  if (!ubicacion) {
    errors.push({ text: "Por favor indique la ubicacion del sensor" });
  }
  if (!tipo) {
    errors.push({ text: "Por favor indique tipo sensor" });
  }
  if (!latitud) {
    errors.push({ text: "Por favor indique la latitud del sensor" });
  }
  if (!longitud) {
    errors.push({ text: "Por favor indique la longitud sensor" });
  }

  
  if (errors.length > 0) {
    res.render("/Registrar", {
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud
    });
  } else {
    const newSensor = new Sensor({
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud 
    });
    newSensor.user = req.user.id;
    await newSensor.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/about");
  }
};

module.exports = principalCtrl;