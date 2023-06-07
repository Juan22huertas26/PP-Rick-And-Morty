const express = require("express");
const characterRoute = express.Router();
const { Characters } = require('../../db')
const { Op } = require('sequelize')


characterRoute.get('/', async (req, res) => {
    try {
      const { name, page } = req.query;
      const pageNumber = parseInt(page, 10) || 1; // Página actual (predeterminada: 1)
      const pageSize = 3; // Tamaño de la página (predeterminado: 10)
      const offset = (pageNumber - 1) * pageSize; // Cálculo del desplazamiento para la consulta
  
      if (name) {
        const { count, rows } = await Characters.findAndCountAll({
          where: { name: { [Op.iLike]: `%${name}%` } },
          offset,
          limit: pageSize
        });
  
        if (count === 0) {
          res.status(404).json({ message: 'Character not found' });
        } else {
          const totalPages = Math.ceil(count / pageSize);
          res.status(200).json({ count, totalPages, currentPage: pageNumber, characters: rows });
        }
      } else {
        const { count, rows } = await Characters.findAndCountAll({
          offset,
          limit: pageSize
        });
  
        if (count === 0) {
          res.status(404).json({ message: 'Characters not found' });
        } else {
          const totalPages = Math.ceil(count / pageSize);
          res.status(200).json({ count, totalPages, currentPage: pageNumber, characters: rows });
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  });
  

characterRoute.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (id) {
            const character = await Characters.findByPk(id)
            if (character) {
                res.status(200).json([character])
            }else{
                res.status(404).json({message: 'Character not found'})
            };
        } else {
            res.status(400).json({message: 'Add a number'})
        };
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = characterRoute;