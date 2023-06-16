const express=require('express');
const app=express();
const pageNotFound=require('./error-handlers/404');
const internalServarError=require('./error-handlers/500');
const nameValidator=require('./middleware/validator');
const logger=require('./middleware/logger');
app.use(logger);
app.get('/',(req,res,next)=>{
    res.send('you are on the home page try using /preson with name ')
})
app.get('/person',nameValidator,(req,res,next)=>{
    let name=req.query.name;
    res.json({
        code:200,
        nameQuery:name,
    })  
})
app.use('*',pageNotFound);
app.use(internalServarError)
function serverStart(PORT){
    app.listen(PORT,()=>{
        console.log(`listing on port ${PORT}`)
    })
}
module.exports={serverStart,app}