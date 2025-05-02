const express = require('express');
const Music = require('../models/music');

const router = express.Router();

router.get('/getall', async (req, res) => {
    try {
      const musics = await Music.find();
      res.status(200).json(musics);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  });
  
router.get('/:id', async (req, res) => {
    try {
      const music = await Music.findById(req.params.id);
      res.status(200).json(music);
    } catch (error) {
      res.status(400).json({ error: 'Invalid ID or item not found' });
    }
  });
  
  router.post('/add', async (req, res) => {
    try {
      const newMusic = new Music(req.body);
      const savedMusic = await newMusic.create();
      res.status(201).json(savedMusic);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  });
  
  router.patch('/update/:id', async (req, res) => {
    try {
      const updatedMusic = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedMusic);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data or ID' });
    }
  });
  
  router.delete('/delete/:id', async (req, res) => {
    try {
      const deletedMusic = await Music.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedMusic);
    } catch (error) {
      res.status(400).json({ error: 'Invalid ID or item not found' });
    }
  });
  
  module.exports = router;