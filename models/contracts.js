const { Schema, model } = require('mongoose')

const contractSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    contract: {
        type:String,
        required: true
    }
})

const Contracts = new model('Contracts', contractSchema)

module.exports = Contracts