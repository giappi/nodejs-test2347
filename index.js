
var ServerEngine   = require("./server/ServerEngine");
var SocketEngine = require("./server/SocketEngine");

// create HTTP server
var serverEngine = new ServerEngine();
serverEngine.setDocumentRoot(__dirname + '/document_root');
serverEngine.start();

// create socket engine
var socketEngine = new SocketEngine(serverEngine.getServer());
socketEngine.start();
