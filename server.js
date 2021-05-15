const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

app.listen(5000, () => {
    console.log('App listening on port 5000!')
})