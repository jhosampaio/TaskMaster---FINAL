const mongoose = require('../db/conn')
const { Schema } = mongoose

const Task = mongoose.model(
    'Task',
    new Schema(
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            status: {
                type: Boolean                              
            },
            user: Object,
            responsable: Object
        },
        { timestamps: true},
    ),
)

module.exports = Task