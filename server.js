const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

const crudRoute = require('./CrudRoute/crud')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', crudRoute)

mongoose.connect('mongodb://localhost/Contracts',
{useNewUrlParser: true})
.then(() => {
    console.log("Database connected");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
})
.catch(e => {
    console.log(e);
}) 