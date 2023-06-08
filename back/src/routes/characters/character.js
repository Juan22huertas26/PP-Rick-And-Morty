const express = require("express");
const characterRoute = express.Router();
const { Characters } = require('../../db')
const { Op } = require('sequelize')


characterRoute.get('/', async (req, res) => {
    try {
      const { name } = req.query;
      if (name) {
        const characters = await Characters.findAll({
          where: { name: { [Op.iLike]: `%${name}%` } },
        });
  
        if (!characters) {
          res.status(404).json({ message: 'Character not found' });
        } else {
          res.status(200).json(characters);
        }
      } else {
        const characters = await Characters.findAll();
  
        if (!characters) {
          res.status(404).json({ message: 'Characters not found' });
        } else {
          res.status(200).json(characters);
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
characterRoute.get('/filter/gender', async (req, res) => {
  try {
    const { gender } = req.query;
    if (gender === 'todos') {
      const characters = await Characters.findAll()
      res.status(200).json(characters)
    }else{
      const characters = await Characters.findAll({where:{gender}})
      if(!characters){
        res.status(404).json({message: 'Character not found'})
      }
      res.status(200).json(characters)
    }
  } catch (error) {
    console.log(error.message);
  }
})

module.exports = characterRoute;