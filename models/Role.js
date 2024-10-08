// const mongoose = require('mongoose');

// const roleSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     permissions: [{ type: String, required: true }]
// });

// module.exports = mongoose.model('Role', roleSchema);
// backend/models/Role.js
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: [{ type: String }]
});

module.exports = mongoose.model('Role', roleSchema);