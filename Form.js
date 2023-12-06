const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
