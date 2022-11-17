const express = require('express');
const {db} = require("../utils/db");
const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll()
        });                                 // client directory renders list-all.hbs file
    })

    .get('/:id', (req, res) => {                    // get one from db and display on home page with given id
        res.render('client/one', {                  //on client path renders one.hbs file
            client: db.getOne(req.params.id),       //client in one.hbs  client.name etc
        });
    })

    .post('/', (req, res) => {
        db.create(req.body);              // add one to db and display on home page
        res.render('client/added', {
            name: req.body.name,
        });
    })

    .put('/:id', (req, res) => {            // modify one from db and display on home page with given id
        res.send(' modify');
    })

    .delete('/:id', (req, res) => {            // delete one from db  with given id
      db.delete(req.params.id);
      res.render('client/deleted')              // client directory renders deleted.hbs file
    })

    .get('/form/add', (req, res) => {            // modify one from db and display on home page with given id
        res.render('client/forms/add');         // path client/forms/ renders add.hbs file
    })


module.exports = {
    clientRouter,
}

