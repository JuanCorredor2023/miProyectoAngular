
const Menu = require("../models/Menu");
const menuControllers = {};

menuControllers.showMenu = async (req, res) => {
  const menu = await Menu.find()
  res.status(200).json({ message: "Este es el menu",menu});
};

menuControllers.create = async (req, res) => {

    try{
        const { name, price, place, description, image} = req.body


            const newMenu = new Menu({name, price, place, description, image})

            await newMenu.save()

            res.status(201).json({message: "Evento Creado", newMenu})
        } catch (error){
        console.log(error)
        res.status(400).json({message: "Error al subir el evento", error})
    }
  }
module.exports = menuControllers;
