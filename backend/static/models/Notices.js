const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticesSchema = new Schema({
    title: String,
    content: String,
    noticesDate: String
});

module.exports = mongoose.model('notices', NoticesSchema);