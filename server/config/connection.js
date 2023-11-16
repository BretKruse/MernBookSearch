const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://krusebret:chess@mongo.pduvkat.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
