const mongoose = require('mongoose');

class RestfulAPI {
    constructor(resource, app, model) {
        this.resource = resource;
        this.app = app;
        this.model = model;
    }

    find() {
        this.app.get(`/api/${this.resource}`, (req, res) => {
            this.model.find({})
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });
        });
    }

    create() {
        this.app.post(`/api/${this.resource}`, (req, res) => {
            this.model.create(req.body)
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });
        });
    }

    delete(identifier) {
        this.app.delete(`/api/${this.resource}/:${identifier}`, (req, res) => {
            this.model.findByIdAndDelete(req.params[identifier])
                .then(data => res.json({ success: true }))
                .catch(err => res.json(err))
        });
    }
}

module.exports = RestfulAPI;