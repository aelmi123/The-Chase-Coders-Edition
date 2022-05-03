const Users = require("../models/User");


async function getAllUsers (req, res){
    try{
        const users = await Users.all;
        res.status(200).json(users);

    } catch(error){
        res.status(500).json({ error });
    }
}

async function createUsers (req, res){
    try{
        const data = req.body
        const createdUsers = await Users.createUser(data)
        res.status(201).json(createdUsers)
    } catch(error){
        res.status(500).json({ error });
    }
}


module.exports = { getAllUsers, createUsers};
