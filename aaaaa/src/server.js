const express = require('express')
const app = express()
const port = 3000
app.get(express.json())
import { Router } from 'express'



app.listen(port, () => {
  console.log(`isso ta rodando numa http://localhost3000 ${port}`)
})

app.get('/', (req, res) => {
  res.json('hello world')
})