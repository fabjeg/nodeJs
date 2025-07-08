const mongoose = require("mongoose")

const postShema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        likers: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('post', postShema)