const {Router} = require('express');
const  init  = require('../controllers');

const inicio = Router();

inicio.get('/', init)

module.exports = inicio;
