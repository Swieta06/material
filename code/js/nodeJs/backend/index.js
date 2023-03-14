const express=require("express")
const app=express()
const port=3000
app.use(express.urlencoded({extended:false}))

app.use('/',require('./src/routes'))

app.get("/",(req,res)=>{
    return res.json({
        message:"running backend"
    })
})
app.listen(port,()=>{
    console.log(`aplikasi trunning on port ${port}`)

})