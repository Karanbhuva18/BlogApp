const Blog = require("../Model/Blogschema")

exports.commentsadd = async(req,res) =>{
    try{
        const {id} = req.params;
        const {comments} = req.body;

        const commentsupdate = await Blog.updateOne({_id:id},{$push:{comments:comments}})

        res.status(200).json({
            success:true,
            data:commentsupdate,
            message:'comment add succesfully'
        })
    }
    catch(error)
    {
        console.error(error)
            res.status(500).json({
                success:false,
                error:error,
                message:"error in comments add"
            })
    }
}




exports.commentsremove = async(req,res) =>{
    try{
        const {id} = req.params;
        

        const commentsupdate = await Blog.updateOne({_id:id},{$pop:{comments:1}})

        res.status(200).json({
            success:true,
            data:commentsupdate,
            message:'comment add succesfully'
        })
    }
    catch(error)
    {
        console.error(error)
            res.status(500).json({
                success:false,
                error:error,
                message:"error in comments add"
            })
    }
}