// define socket behavior
module.exports = io => {
  io.on('connection', socket => {
    // user starts editing a document
    // data = {docId}
    socket.on('join doc', data => {
      socket.join(data.docId);
    });
    
    // user makes a change to the javascript code
    // data = {docId, text}
    socket.on('edit text', data => {
      socket.broadcast.to(data.docId).emit('receive text', {text: data.text});
    });
    
    // user leaves the document
    // data = {docId}
    socket.on('leave doc', data => {
      socket.leave(data.docId);
    });
  });
};

