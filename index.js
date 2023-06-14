require('dotenv').config();
const PORT=process.env.PORT;
const {serverStart} =require('./src/server');

serverStart(PORT)