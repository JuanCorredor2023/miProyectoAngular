const Admin = require("../models/Admin");
const adminsControllers = {};

const jwt = require("jsonwebtoken");

adminsControllers.sayHi = async (req, res) => {
  console.log(req.decoded)
  res.status(200).json({ message: "hola" });
};

adminsControllers.signup = async (req, res) => {
  console.log(req.body)
  const { email, password, role } = req.body;

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400).json({ message: "Usuario ya existe!" });
  } else {
    console.log(role)
    const newAdmin = new Admin({ email, password, role });
    await newAdmin.save();

    //const token = jwt.sign({_id: newAdmin._id, email: newAdmin.email}, "pato")

    res.status(201).json({ message: "Usuario creado", newAdmin});
  }
};

adminsControllers.signin = async (req, res) => {
  //escribimos en el formulario
  const { email, password } = req.body;

  //lo que me devuelve la base de datos
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(401).json({ message: "Usuario no existe" });
  }

  if (admin.password !== password) {
    return res.status(401).json({ message: "La contraseña es incorrecta!" });
  }

  const token = jwt.sign({ _id: admin._id, email: admin.email, role: admin.role }, "pato");

  res.status(200).json({ message: "Tu estas logueado correctamente", token });
};

module.exports = adminsControllers;

/*

usersControllers.signup = async (req, res) => {
  const { email, password } = req.body;

  const newAdmin = new Admin({ email, password });

  await newAdmin.save();

  const token = jwt.sign({ _id: newAdmin._id, email: newAdmin.email }, "pato");

  res.status(201).json({ message: "Admin has been created", token });
};

usersControllers.signin = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Admin.findOne({email});

    if(!user) return res.status(401).json({ message: "The email not exists" });//correo no encontrado
    if(user.password !== password) return res.status(401).json({ message: "Wrong password" })

    const token = jwt.sign({ _id: user._id, email: user.email }, "pato");

    res.status(200).json({message: "you are logged in", token})
  };

*/
