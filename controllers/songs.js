const Song = require('../models/Song');

module.exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports.createSong = async (req, res) => {
    const song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album
    });

    try {
        const newSong = await song.save();
        res.status(201).json(newSong);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports.getSong = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (song == null) {
            return res.status(404).json({ message: 'Cannot find song' });
        }
        res.status(200).json(song);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports.deleteSong = async (req, res) => {
    try {
        await Song.remove({ _id: req.params.id });
        res.status(200).json({ message: "Song was successfully deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports.updateSong = async (req, res) => {
    try {
        const updatedSong = await Song.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedSong);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};