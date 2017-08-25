

module.exports = function()
{
    var port = +(process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT) || 3000;
    // Setup basic express server
    var Express = require('express');
    var appListener = new Express();

    var server = require('http').createServer(appListener);
    
    /**
     * Start to listen
     */
    this.start = function()
    {
        server.listen(port, function()
        {
            console.log('Server has started and listening at port %d', port);
        });
        
        
    };
    
    this.setDocumentRoot = function(path)
    {
        // root of website
        appListener.use(Express.static(path));
    };
    
    this.stop = function()
    {
        server.close(function()
        {
            console.log('Server closed.');
        });
    };

    
    this.getServer = function()
    {
        return server;
    };
};
