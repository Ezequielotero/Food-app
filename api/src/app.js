const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const axios = require('axios')

require('./db.js');

const server = express();

const sendGettemps = async () => {
    var total=[]
      const resp = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=bb6df4e1a07040758dba35bd3b983457');
      for (let i = 0; i < resp.data.length; i++) {
          if(resp.data[i].temperament){
            var split=resp.data[i].temperament.split(','||',')
            for (let j = 0; j < split.length; j++){
              if(!total.includes(split[j])){
                total.push(split[j])
              }
            }
          }
        }
        for (let i = 0; i < total.length; i++) {
          Temperament.findOrCreate({
            where:{
              name:total[i]
            }
          })
          
        }
  }

sendGettemps()

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
