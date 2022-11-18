const express = require('express');
const methodOverride = require('method-override');
const {engine} = require("express-handlebars");
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');
const {handleError} = require("./utils/error");

const app = express();

app.use(methodOverride('_method'))
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));      //displays static files from public directory
app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers,
}))
app.set('view engine', '.hbs');


app.use('/', homeRouter);
app.use('/client', clientRouter);

app.use(handleError)        //own error handling from error.hbs


app.listen(3000, 'localhost', () => {
    console.log('Server is ON and running on http://localhost:3000')
})

//
// const express = require('express');
// const hbs = require('express-handlebars');
// // const {urlencoded} = require("express");
// const {clientRouter} = require("./routers/client");
// const {homeRouter} = require("./routers/home");
// const {db} = require("./utils/db");
// const app = express();
//
// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.static('public'));
// app.use(express.json());
// app.engine('.hbs', hbs({
//     extname: '.hbs',
//     helpers: 'handlebarsHelpers'
// }));
// app.set('view engine', '.hbs');
//
// app.use('/', homeRouter);
// app.use('/client', clientRouter);
// // app.get('/test', (req, res) => {
// //     res.send(db.getOne('3e396670-0707-4912-a97e-c0237041a49f'));
// // })
//
// app.listen(3000, '0.0.0.0', () => {
//     console.log('Program działa na porcie http://localhost:3000');
// })