const express = require('express')
const app = express()
const port = 5000
const routes = require('./routes/routes.js')
const bodyParser = require('body-parser')
const connection = require('./mongoDB/connection')
const cors = require('cors');

//DB connection
connection()

//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

//cors
app.use(cors())

//routes
app.use('/', routes)

//listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))