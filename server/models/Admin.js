const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true
    },
});

const Connectadmin = mongoose.model('AdminSchema', AdminSchema);
module.exports = Connectadmin;


