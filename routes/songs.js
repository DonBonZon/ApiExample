const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songs');

// getting all songs
router.get('/', songsController.getAllSongs);

// inserting single song
router.post('/', songsController.createSong);

// getting single song by id
router.get('/:id', songsController.getSong);

// deleting signle song by id
router.delete('/:id', songsController.deleteSong);

// updating single song
router.patch('/:id', songsController.updateSong);

module.exports = router;