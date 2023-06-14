module.exports=(req,res,next)=>{
  const {name}=req.query;
  if(!name) next('please provide a name ')
  else res.json({
    name:name
  })
}