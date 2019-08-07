const exp=require('express')
const e=exp()
const port=3000
e.get('/pavan',(req,res)=>res.send('helloworld how r you'))
e.listen(port,()=>console.log('Iam port '+ port))