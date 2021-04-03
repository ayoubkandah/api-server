'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const foodRouter = require('./routes/food');
const clothesRouter=require("./routes/clothes")
const serverError=require("./Error/500")
const notFound=require("./Error/404")
const app=express()

app.use(express.json());
app.use(cors());
app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);
app.use(serverError)
app.use("*",notFound)
app.use(morgan('dev'));

module.exports = {
    server: app,
    start: (port) => {
      const PORT = port || 2020;
      app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
  };