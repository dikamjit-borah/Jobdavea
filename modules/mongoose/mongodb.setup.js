
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const _connection = mongoose.connection

    _connection.on("error", (err) => {
        console.log(err);
    })

    _connection.on("open", () => {
        console.log("Connected to Atlas");
    })
}