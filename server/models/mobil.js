const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mobilSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const Mobil = mongoose.model('Mobil', mobilSchema)

module.exports = Mobil