const logger =require('./logger');
const supertest=require('supertest');
const {app}=require('../src/server');
const req=supertest(app);
describe('testing the logger ',()=>{
    it('testing no name query',async()=>{
        const res=await req.get('/person');
        expect(res.status).toEqual(500);
    })
    it('testing no name query',async()=>{
        const res=await req.get('/person');
        expect(res.status).toEqual(500);
    })
})