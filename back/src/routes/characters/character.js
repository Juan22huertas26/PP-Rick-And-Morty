const express = require("express");
const characterRoute = express.Router();
const { Characters } = require('../../db')


characterRoute.get('/', async (req, res) =>{
    try {
        const characters = await Characters.findAll();
        if (!characters) {
            res.status(404).json({message:'Characters not found'})
        }
        res.status(200).json(characters)
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = characterRoute;