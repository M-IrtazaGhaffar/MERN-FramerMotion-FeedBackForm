const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connection = async () => {
    try {
        mongoose.Promise = global.Promise;

        const urlDB = 'mongodb://irtaza:IrtazaGhaffar2003@ac-1bgmek9-shard-00-00.7egyadb.mongodb.net:27017,ac-1bgmek9-shard-00-01.7egyadb.mongodb.net:27017,ac-1bgmek9-shard-00-02.7egyadb.mongodb.net:27017/Feed_Back_DB?ssl=true&replicaSet=atlas-rt9o3g-shard-0&authSource=admin&retryWrites=true&w=majority'

        mongoose.connect(urlDB, {
            useNewUrlParser: true
        }, (err) => {
            if (!err) {
                console.log('MongoDB Connection Succeeded.')
            } else {
                console.log('Error in DB connection: ' + err)
            }
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection