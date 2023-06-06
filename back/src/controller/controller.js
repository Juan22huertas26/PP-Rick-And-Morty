const axios = require('axios');
const { Characters } = require('../db')

const api = async () => {
    try {
        const character = [];
        for (let i = 0; i <= 1; i++) {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
            const results = data.results;
    
            let name = results.map((obj) => { 
                return {
                    id: obj.id,
                    name: obj.name,
                    status: obj.status,
                    species: obj.species,
                    type: obj.type ? obj.type : 'type not found',
                    gender: obj.gender,
                    origin: obj.origin.name,
                    location: obj.location.name,
                    image: obj.image
                }
            })
            name.map((obj) => character.push(obj))
        }
        return character
    } catch (error) {
        console.log(error.message);
    }
}

const bdd = async () => {
    try {
        const character = await api();
        for (let i = 0; i < character.length; i++) {
            try {
                const { name, status, species, type, gender, origin, location, image } = character[i];
                const user = await Characters.findOne({where:{name}});
                if (user) {
                    continue
                }
                 await Characters.create({
                    name, status, species, type, gender, origin, location, image
                })
            } catch (error) {
                console.log(error.message);
            }
        }
        console.log('Todo salio bien');
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = { bdd }