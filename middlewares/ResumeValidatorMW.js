const validator = require('../util/ResumesValidator');



module.exports=(req,res,next)=>
{
    let valid=validator(req.body)
    if(valid){
        req.valid=1;
        nxt();
    }
    else
        res.status(403).send( "forbidden command")
}