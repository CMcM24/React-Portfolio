const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    link: {type: String, required: true},
    tech: {type: Array, required: true},
    hoisted: {type: Boolean, default: false}
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;