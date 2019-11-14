const db = require("../models");

const projectController = {
    grabAllProjects: function(req, res){
        db.Project
        .find(req.query)
        .sort({date: -1})
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    createProject: function(req, res){
        db.Project
        .create(req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    updateProject: function(req, res){
        db.Project
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },
    removeProject: function(req, res){
        db.Project
        .findById({_id: req.params.id})
        .then(dbProject => dbProject.remove())
        .then(err => res.status(422).json(err));
    }
};

module.exports = projectController;