const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Teams', teamsSchema);
