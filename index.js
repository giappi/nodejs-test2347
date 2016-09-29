
var HttpServer   = require("./server/HTTPServer");
var SocketEngine = require("./server/SocketEngine");

// create HTTP server
var server = new HttpServer();
server.setDocumentRoot(__dirname + '/document_root');
server.start();

// create socket engine
var socketEngine = new SocketEngine(server.getServer());
socketEngine.start();
