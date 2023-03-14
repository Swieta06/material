
const jwt=require('jsonwebtoken')
const authMiddleware=(req,res,next)=>{
const bearear =req.headers.authorization
if(bearear){
    const token=bearear.slice(7)
    try {
        const user=jwt.verify(token,'backend')
        req.user=user 
        next()
    } catch (err) {
        return res.status(401).json({
            success:false,
            message:'Unauthorized'
        })
    }

}else{
    return res.status(401).json({
        success:false,
        message:'Unauthorized'
    })

}
}
module.exports=authMiddleware