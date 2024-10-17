const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/register', async (req, res) => {
    
    const { username, password } = req.body;
    const newUser  = new User({ username, password });
    await newUser.save();
    res.status(201).send(newUser);
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
});

// Update user
router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(user);
});

// Delete user
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;