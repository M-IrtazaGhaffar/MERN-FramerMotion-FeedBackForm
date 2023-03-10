const model = require('../mongoDB/model');

const feedBack = async (req, res) => {
    try {
        await model.insertMany(
            req.body
        ).then((docs) => {
            console.log('Doc Added')
        });
        //responding back
        res.json({'message': true})
    } catch (error) {
        console.log('Error: ' + error)
    }
}

module.exports = { feedBack }