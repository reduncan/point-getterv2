const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

mongoose.promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || `mongodb://${process.env.userName}:${process.env.passWord}@ds051334.mlab.com:51334/heroku_8c5g9z7b`,
    { useNewUrlParser: true }
);

mongoose.set('useFindAndModify', false);

app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
});