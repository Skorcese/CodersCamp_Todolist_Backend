const {Project, validate} = require('../models/projects'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('projectget');
});

router.post('/', async (req, res) => {

});

router.put('/:id', async (req, res) => {

});

router.delete('/:id', async (req, res) => {

});

router.get('/:id', async (req, res) => {

});

module.exports = router; 