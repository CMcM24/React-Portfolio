const router = require("express").Router();
const projectController = require("../../controllers/projectController.js");

router.route("/")
.get(projectController.grabAllProjects)
.post(projectController.createProject);

router.route("/:id")
.put(projectController.updateProject)
.delete(projectController.removeProject);

module.exports = router;