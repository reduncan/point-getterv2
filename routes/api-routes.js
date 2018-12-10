const ResfulAPI = require('./RestClass');
const db = require('../models');

module.exports = function (app) {

    const leaders = new ResfulAPI('leader', app, db.leaders);
    leaders.find();
    leaders.create();
    leaders.delete('id');
};