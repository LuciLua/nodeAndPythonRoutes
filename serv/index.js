const express = require('express')
const consign = require('consign')

const app = express()
const port = 3000

consign()
    .include('./config/routes.js')
    .then('./config/middlewares.js')
    .into(app)

app.listen(port, () => {
    console.log('Server is running...')
})
