var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.emit('createMessage', {
  from: 'John',
  text: 'yeah yeah'
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
