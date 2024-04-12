const express = require('express')
import data from "./apiCode.js"
require('dotenv').config()
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/souptik', (req, res) => {
  res.send('Hello Souptik!')
})

app.send("/apiData", (res, req) => {
  res.json(data)
})

app.get("/register", (req, res) => {
  res.send("<h1>Register</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app that is listening on port ${port}`)
}) 