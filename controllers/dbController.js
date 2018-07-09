const pg = require('pg');
const format = require('pg-format');

// doc_id       | character varying | not null
//  owner        | character varying | not null
//  name         | character varying | not null
//  text_content | character varying | not null
//  last_updated | date              | not null
let newDate;
module.exports = function(pool) {
    return {
        createDoc: (req, res, next) => {

        // console.log('inside createDOC', req.app.locals.user);
        // console.log(req.body);

        const queryText = 'INSERT INTO documents ( owner, name, text_content, last_updated) VALUES($1, $2, $3, $4) RETURNING *';
        newDate = new Date();
        const values = [req.user.id, req.body.name, '', newDate];
  
        pool.query(queryText, values).then(result => {
            console.log('data saved')
            res.locals.doc_id = result.rows[0].doc_id;
            next();
          }).catch(err => {
              console.log('end')
            if (err) throw new Error(err);
          });
     },
         addPermittedUsers:  (req, res, next) => {  
         // res.locals.doc_id provides us the doc_id.. which was declared in createDoc
            const values = [];
            //// POSSIBLE BUG 
            const doc_id = res.locals.doc_id ? res.locals.doc_id : req.body.doc_id;
            
            req.body.permitted_users.forEach( email => {
                values.push([doc_id, email])
            })
            const sql = format('INSERT INTO document_permissions (doc_id, permitted_user) VALUES %L', values);

            pool.query(sql).then(result => {
                console.log('permissions granted to' + req.body.permitted_users.length + ' users')
                next();
                }).catch(err => {
                    console.log('caught error')
                if (err) throw new Error(err);
                });

        
         },



         editDoc:  (req, res, next) => {
            console.log('edited doc');
            next();
        },



        deletePermittedUsers:  (req, res, next) => {
            // TO DO: seems to persist....
            // assumes client sends in req.body.doc_id
            const queryText = 'DELETE FROM document_permissions WHERE doc_id=$1';
            const values = [req.body.doc_id];
            
            pool.query(queryText, values).then(result => {
                console.log('permissions revoked')
                next();
              }).catch(err => {
                  console.log('end')
                if (err) throw new Error(err);
              });
            console.log("deleted permissions");
            next();
        },


        saveDocumentContent:  (req, res, next) => {

        },


        getMyDocs:  (req, res, next) => {
            console.log('getting documents');
            res.locals.docs =  {owned: [], permitted: []};
            const ownedDocs = 'SELECT doc_id, owner, name, last_updated FROM documents WHERE owner=$1';
            const user_id = [req.user.id];
            console.log(req.user.id, req.user, "USER COOKIIIIE");
            pool.query(ownedDocs, user_id).then(result => {
                
                res.locals.docs.owned = result.rows;
                console.log(res.locals.docs);
                next();
              }).catch(err => {
                  console.log('end');
                if (err) throw new Error(err);
              }); 
        },
        getPermittedDocs:  (req, res, next) => {
            console.log('getting permitted documents');
            const permittedDocs = ' SELECT documents.doc_id, documents.owner, documents.name, documents.last_updated FROM documents INNER JOIN document_permissions ON document_permissions.doc_id = documents.doc_id WHERE document_permissions.permitted_user=$1';
            const user_email = [req.user.email]; 
            console.log("got permitted documents", req.user.email);
            pool.query(permittedDocs, user_email).then(result => {
                console.log(result.rows)
                res.locals.docs.permitted =  result.rows;
                console.log(res.locals.docs)
                next();
              }).catch(err => {
                  console.log('end');
                if (err) throw new Error(err);
              }); 
        },


     }
    


};