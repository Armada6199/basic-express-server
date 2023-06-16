'use strict';
const supertest=require('supertest');
const {app}=require('../src/server');
const req=supertest(app);
describe('server Testing', () => { 
    it('testing not found page',async()=>{
        const res=await req.get('/nofoundex');
        expect(res.status).toEqual(404);
    })
    it('testing bad method',async()=>{
        const res=await req.post('/person');
        expect(res.status).toBe(404);
    })
  
    it('testing sent object with right query',async()=>{
        const sentName='mohamad';
        const res=await req.get(`/person?name=${sentName}`);
        expect(res.body.name).toBe(sentName);
    })
})