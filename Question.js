const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: String, 
  text: String,
  image: String,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
