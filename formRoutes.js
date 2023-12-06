const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/forms', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/forms/:formId', async (req, res) => {
  try {
    const form = await Form.findById(req.params.formId).populate('questions');
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
