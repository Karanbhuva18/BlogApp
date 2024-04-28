const Blog = require('../Model/Blogschema')

exports.likesUpdate = async(req,res)=>{
    try{
            const {id} = req.params;

            const likesUpdate = await Blog.updateOne({ _id: id }, { $inc: { Likes: 1 } });

            res.status(200).json({
                success:true,
                data:likesUpdate,
                message:'updated succesfully'
            })
    }
    catch(error)
    {
        console.error(error.message)
        res.status(500).json({
            success:false,
            error:error.message,
            message:'server error in updatelike'
        })
    }
}

exports.likedecres = async(req,res) =>{
    try{
        const {id} = req.params;

        const likesUpdate = await Blog.updateOne({ _id: id }, { $inc: { Likes: -1 } });

        res.status(200).json({
            success:true,
            data:likesUpdate,
            message:'updated succesfully'
        })
}
catch(error)
{
    console.error(error.message)
    res.status(500).json({
        success:false,
        error:error.message,
        message:'server error in updatelike'
    })
}
} 