import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Counter from './components/Counter'
import path from 'path'
import mysql from 'mysql'
import bodyParser from 'body-parser'
import connection from './mysqlConnection'
import moment from 'moment'

const app = express()

connection.query('CREATE DATABASE IF NOT EXISTS bcode', function (err) {
    if (err) throw err;
});

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

app.post('/users', function (req, res) {
  connection.query('USE bcode', function (err) {
      if (err) throw err;
      var email = req.body.email;
      var emailExistsQuery = 'SELECT * FROM users WHERE email = "' + email + '" LIMIT 1';
      connection.query(emailExistsQuery, function(err, email){
        var emailExists = email.length === 1;
        if(emailExists){
          console.log('アドレス被ってるで');
        }else{
          connection.query('CREATE TABLE IF NOT EXISTS users('
              + 'id INT NOT NULL AUTO_INCREMENT,'
              + 'PRIMARY KEY(id),'
              + 'userId VARCHAR(30),'
              + 'name VARCHAR(30),'
              + 'email VARCHAR(255),'
              + 'password VARCHAR(255),'
              + 'created_at DATETIME(6)'
              +  ')', function (err) {
                  if (err) throw err;
                  var userId = req.body.userId;
                  var userName = req.body.name;
                  var email = req.body.email;
                  var password = req.body.password;
                  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
                  var registerQuery = 'INSERT INTO users (userId, name, email, password, created_at) VALUES ("' + userId + '", ' + '"' + userName + '", ' + '"' + email + '", ' + '"' + password + '", ' + '"' + createdAt + '")';
                  connection.query(registerQuery,
                      function (err, result) {
                          if (err) throw err;
                          res.setHeader('Content-Type', 'text/plain')
                          res.write('User added to database with ID: ' + result.insertId + '<br>');
                          res.write('you posted:\n')
                          res.end(JSON.stringify(req.body, null, 2))
                      }
                  );
              });
              console.log('オッケー！');
        }
      })

  });

});

/*一旦置く
app.post('/login', function(req, res, next){
  connection.query('USE bcode', function(err){
    if (err) throw err;
    var email = req.body.email;
    var password = req.body.password;
    var query = 'SELECT user_id FROM users WHERE email = "' + email + '" AND password = "' + password + '" LIMIT 1';
    connection.query(query, function(err, rows){
      var userId = rows.length? rows[0].user_id:false;
      if(userId){
        req.session.user_id = userId;
        console.log('login complete!');
      }else{
        console.log('ログインできてねえお');
      }
    })
  });
});
*/

app.post('/login', function(req, res, next){
  connection.query('USE bcode', function(err){
    if (err) throw err;
    var email = req.body.email;
    var password = req.body.password;
    var query = 'SELECT user_id FROM users WHERE email = "' + email + '" AND password = "' + password + '" LIMIT 1';
    connection.query(query, function(err, rows){
      var userId = rows.length? rows[0].user_id:false;
      if(userId){
        req.session.user_id = userId;
        console.log('login complete!');
      }else{
        console.log('ログインできてねえお');
      }
    })
  });
});



//http://localhost:3000/helloにアクセスすると、HelloをJSONで吐き出す
app.get('/hello', function (req, res, next) {
  var param = {"name":"Boostnote", "url": "boostnote.io"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

//http://localhost:3000/hello/Shibuya?shop=HandM と入力すると、その値をJSONで吐き出す
app.get('/hello/:place', function (req, res, next) {
  var param = {"result":"Hello "+ req.params.place + " !","shop name":req.query.shop};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
})
