const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app = express();
var server = http.createServer(app);
var io = socketIO(server);
// express middleware to use the public folder
app.use(express.static(publicPath));

// register an event listener
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
