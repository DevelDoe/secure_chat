var ChatAPI = require('./chat').ChatAPI;

module.exports = exports = function(app) {
  var chatAPI = new ChatAPI();

  // Home Page
  app.get('/', function(req,res){
    res.sendfile('ui/views/index.html');
  });

  // // Contact Actions
  app.post("/api/invite", chatAPI.Invite);
  // app.get("/api/contact/:id", contactsUI.GetContact);
  // app.put("/api/contact/:id", contactsUI.UpdateContact);
  // app.post("/api/contact", contactsUI.CreateContact);
  // app.delete("/api/contact/:id", contactsUI.DeleteContact);

  app.all('*', function(req, res){
    res.status(404).send('Unable to process request');
    //ErrorHandler({message: '404: Unable to process request', stack: null}, req, res, null, false)
  });

  // Error handling middleware
  //app.use(ErrorHandler);
}