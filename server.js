const express = require('express')
const { Server } = require('http')
const Socket = require('socket.io')
const path = require('path')

const port = 8080

const app = express()
const server = Server(app)
const io = Socket(server)

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

io.on('connection', socket => {
  console.log(`connected ${socket.id}`)
  socket.on('disconnect', () => console.log(`disconnect ${socket.id}`))
})

server.listen(port, () => console.log(`listening on 0.0.0.0:${port}`))
