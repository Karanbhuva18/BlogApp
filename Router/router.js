const express = require('express');
const router = express.Router();
const Blogdata = require('../controlers/createBlog');
const likeinc = require('../controlers/updateLikes')
const comments = require('../controlers/updateComments')
// Assuming createBlog is the function responsible for handling the POST request
router.post('/add', Blogdata.createBlog);
router.put('/likeupdate/:id',likeinc.likesUpdate);
router.put('/likedecres/:id',likeinc.likedecres);
router.put('/commentsadd/:id',comments.commentsadd);
router.put('/commentsremove/:id',comments.commentsremove);
module.exports = router;
