const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    artist: {
        type: String,
        required: true
    },

    album: {
        type: String,
    },

    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },

    updatedDate: {
        type: Date,
    }
});

module.exports = mongoose.model('Song', SongSchema);