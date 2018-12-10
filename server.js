const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

mongoose.promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://rduncan:pass123@ds231588.mlab.com:31588/heroku_ndk9w99q",
    { useNewUrlParser: true }
);

mongoose.set('useFindAndModify', false);

app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
});