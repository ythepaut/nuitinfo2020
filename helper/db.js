module.exports = (callback) => {

    const MongoClient = require("mongodb").MongoClient;

    MongoClient.connect(
        "mongodb://readonly:E0i2Dy5w9YQwOBrozvqe@localhost:27017/db",//TODO replace db name
        {useUnifiedTopology : true},
        (err, client) => {
            if (err) {
                console.log("Erreur de connexion à la base :");
                console.log(err);
                callback(null);
            } else {
                callback(client.db("db"));//TODO replace db name
            }
        }
    );
}
