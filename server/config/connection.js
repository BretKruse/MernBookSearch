const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://krusebret:<Che$$#1993>@cluster0.mkzg9mv.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
