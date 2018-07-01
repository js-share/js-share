// create server routes here
module.exports = function(app) {
  app.get('/api/hello', (req, res) => {
    res.send({message: 'Hi! Here is some content from the server.'});
  });
  // routes for creating, writing ,updating, and deleting
}
