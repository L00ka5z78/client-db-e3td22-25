const express = require('express');
const {db} = require("../utils/db");
const {ClientRecords} = require("../records/client-records");
const {NotFoundError} = require("../utils/error");
const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all.hbs', {               // client directory renders list-all.hbs file
            clients: db.getAll()
        });
    })

    .get('/:id', (req, res) => {                            // get one from db and display on home page with given id
        const client = db.getOne(req.params.id);             //client (not 'this') in one.hbs  client.name etc
        if (!client) {
            throw new NotFoundError();
        }
        res.render('client/one.hbs', {                   // client path renders one.hbs file
            client,
        });
    })

    .post('/', (req, res) => {
        const id = db.create(req.body);              // create/add one to db and display on home page

        res
            .status(201)
            .render('client/added.hbs', {             // client path renders added.hbs file
                name: req.body.name,
                id,
            });
    })

    .put('/:id', async (req, res) => {
        const client = db.getOne(req.params.id);
        client.id = req.body.id
        await client.update()

        res.render('client/modified.hbs', {
            // name: req.body.name,
            // id: req.params.id,
            client,
        });
    })

    .delete('/:id', (req, res) => {
                                                         //delete one from db  with given id
        db.delete(req.params.id);                       //client (not 'this') in one.hbs  client.name etc
        res.render('client/deleted.hbs');               // client directory renders deleted.hbs file
    })

    .get('/form/add', (req, res) => {                   // modify one from db and display on home page with given id
        res.render('client/forms/add');                 // path client/forms/ renders add.hbs file
    })

    .get('/form/edit/:id', (req, res) => {               // modify one from db and display on home page with given id
        const client = db.getOne(req.params.id);         //client (not 'this') in one.hbs  client.name etc
        if (!client) {
            throw new NotFoundError();
        }
        res.render('client/forms/edit.hbs', {           // path client/forms/ renders edit.hbs file.
            client,
        });
    })

module.exports = {
    clientRouter,
}

