const exp=require('express')
const e=exp()
const port=3000
e.get('/pavan',(req,res)=>res.sendFile(__dirname+'/html/index.html'))
e.get('/pav',function(req,res){
res.send('Pavan kumar')
});
e.listen(port,()=>console.log('Iam port '+ port))