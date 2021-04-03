'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true , 
   
  })
  .then(() => {
      console.log("ss")
    server.start(process.env.PORT);

  })
  .catch((err) => {
    console.log('mangose Error', err.message);
  });