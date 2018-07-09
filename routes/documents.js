// middleware
const dbController = require('../controllers/dbController');

  
module.exports = (app, pool) => {
  // define document routes here...
  app.post('/api/createdoc',
  dbController(pool).createDoc,
  dbController(pool).addPermittedUsers,
   (req, res) => {
    res.send("SUCCESS MESSAGE");   
  });

  app.post('/api/docSettings',
  dbController(pool).editDocTitle,
  dbController(pool).deletePermittedUsers,
  dbController(pool).addPermittedUsers,
   (req, res) => {
    res.send('Document settings updated!');   
  });

  // GET Request - docTitle and sharedUsers
  app.get('/api/docSettings/:id',
  dbController(pool).getDocTitle,
  dbController(pool).getPermittedUsers,
  (req, res) => {
    res.send(res.locals.formInfo);
  });

  app.get('/api/getdocuments',
  dbController(pool).getMyDocs,
  dbController(pool).getPermittedDocs,
   (req, res) => {
    res.send(res.locals.docs);   
  }); 

  // GET Request - getting text from id
  app.get('/api/document/:id',
  dbController(pool).getDocText, 
  (req, res) => {
    res.send(res.locals.text_content);    
  }
)

// PUT req - save text_content and update last_updated
app.put('/api/document/:id',
dbController(pool).saveDocumentContent, 
(req, res) => {
  res.send("File successfully saved!");    
}
)

}
