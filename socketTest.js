var zerorpc = require("zerorpc");
var routes = require('./routes/imageRest');


var client = new zerorpc.Client();
client.connect("tcp://158.38.43.76:4242");
function word2vec(input, callback){

  client.invoke("word2vecSocket", input, function(error, res, more) {
      callback(res);
      // client.close();
  });
}

word2vec('hest', function(res){
  console.log(res);
});

exports.word2vec = word2vec;

// var app = require('express')()
//   , server = require('http').createServer(app)
//   , io = require('socket.io').listen(server);
//
// server.listen(9000);
//
//
// io.sockets.on('connection', function (socket) {
//   //Send welcome after connection is established
//   socket.emit('welcome', { hello: 'world' });
//
//   //Response question from client include client name
//   socket.on('howareyou', function (data) {
//     socket.emit('howareyou', { data: 'I\'m fine, thank' + data.name });
//   });
//
//   socket.on('disconnect', function () {
//     console.log("Client is disconnected");
//   });
// });
