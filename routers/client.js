const express = require('express');
const {db} = require("../utils/db");

const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll()
        })       //on client path renders list-all.hbs file
    })

    .get('/:id', (req, res) => {            // get one from db and display on home page with given id
        res.send('get one by id')
    })

    .post('/', (req, res) => {              // add one to db and display on home page
        res.send('add one');
    })

    .put('/:id', (req, res) => {            // modify one from db and display on home page with given id
        res.send(' modify');
    })

    .delete('/:id', (req, res) => {            // delete one from db  with given id
        res.send(' delete');
    })


module.exports = {
    clientRouter,
}