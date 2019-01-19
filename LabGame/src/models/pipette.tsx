const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pipetteSchema = new Schema({
    volume: {
        type: Number,
        min: 0,
        required: true
    }
})