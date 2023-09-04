const socket = require('socket.io')
const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const serverHttp = http.createServer(app)

const io = socket(serverHttp)

module.exports = { serverHttp, io }
