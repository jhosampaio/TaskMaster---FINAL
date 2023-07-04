const Task = require('../models/Task');

module.exports = class TaskController {
    static async create(req, res) {
        const {name, description, status} = req.body;
    }
}