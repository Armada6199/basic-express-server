'use strict'
const logger =require('./logger');
const supertest=require('supertest');
const {app}=require('../src/server');
const req=supertest(app);
describe('testing the logger ',()=>{
    
})