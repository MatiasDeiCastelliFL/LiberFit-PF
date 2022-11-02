const {Router} = require('express');
const  init  = require('../controllers');

const log = Router();

log.get('/inicio', init)

module.exports = log;