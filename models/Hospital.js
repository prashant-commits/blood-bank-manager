const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    hospitalId: {
        type: String, required: true
    }, emailAddress: {
        type: String, required: true
    }, name: {
        type: String
    }, phoneNumber: {
        type: String
    }, zip: {
        type: Number
    }, state: {
        type: String
    }, country: {
        type: String
    }, dateOfEntry: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model('Hospital', HospitalSchema);
