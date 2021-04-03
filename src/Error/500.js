module.exports=(err,req,res,next)=>{
    res.status(500)
    res.json({
        Message:"server ERROR 5xx"
    })
    
    }