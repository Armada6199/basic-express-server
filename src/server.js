const express=require('express');
const app=express();
const pageNotFound=require('./error-handlers/404');
const internalServarError=require('./error-handlers/500');
const nameValidator=require('./middleware/validator');
app.get('/person',nameValidator,(req,res,next)=>{
})
app.use('*',pageNotFound);
app.use(internalServarError)
function serverStart(PORT){
    app.listen(PORT,()=>{
        console.log(`listing on port ${PORT}`)
    })
}
module.exports={serverStart,app}