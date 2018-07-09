// middleware
const dbController = require('../controllers/dbController');

  
module.exports = (app, pool) => {
  // define document routes here...
  app.post('/api/createdoc',
  dbController(pool).createDoc,
  dbController(pool).addPermittedUsers,
   (req, res) => {
    res.send(req.body);   
  });

  app.post('/api/docSettings',
  dbController(pool).editDoc,
  dbController(pool).deletePermittedUsers,
  dbController(pool).addPermittedUsers,
   (req, res) => {
    res.send(req.body);   
  });
// SHOULD BE getdocuments
  // app.get('/api/getdocuments',
  app.get('/api/getdocument',
  dbController(pool).getMyDocs,
  dbController(pool).getPermittedDocs,
   (req, res) => {
    res.send(res.locals.docs);   
  }); 

  //getting text from id
  // saving text to id


}
