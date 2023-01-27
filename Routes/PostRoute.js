const express = require('express');
const {createPost,getAllPost,singlePost,updateSingelPostData} = require("../controller/PostController")


const PostValue = express.Router()

PostValue.route("/")
 .get(getAllPost)
 .post(createPost)
 PostValue.route("/:id")
 .get(singlePost)
 .patch(updateSingelPostData)


 module.exports = PostValue



