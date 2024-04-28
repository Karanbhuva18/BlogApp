const Blog = require('../Model/Blogschema')

exports.createBlog = async (req,res) =>{
    try{
        const { title, description, Likes = 0, comments = [] } = req.body;

            const response = await Blog.create({title,description,Likes,comments})

            res.status(201).json({
                success: true,
                data: response,
                message: 'Entry created successfully'
            });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        });
    }
} 