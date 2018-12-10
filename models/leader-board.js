const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaderSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },

    totalClicks: {
        type: Number,
        trim: true
    }
});

const leaders = mongoose.model("leaders", leaderSchema);

module.exports = leaders;