const PostSchema = require("../model/PostModel")

const createPost = async(req,res)=>{
    let {title,body} = req.body
    console.log(req.body);
    try{
        let newPost = new PostSchema({title,body})
       await  newPost.save()
       return res.status(201).send({message : "post Create successfully"})
 
    }catch(err){
        return res.status(500).send(err)
    }
}



const getAllPost= async(req,res)=>{
    try{
            let allPost = await PostSchema.find()
            return res.status(200).send(allPost)
    }catch(err){
        return res.status(500).send(err)
    }
}


const singlePost = async(req,res)=>{
   
    let {id} = req.params
    try{
        let singlePost = await PostSchema.findById({_id: id})
        return res.status(200).send(singlePost)
    }catch(err){
        return res.status(500).send(err)
    }
}


const updateSingelPostData = async(req,res)=>{
    let {id} = req.params
    try{
        let singlePost = await PostSchema.findByIdAndUpdate({_id: id},req.body)
        return res.status(200).send(singlePost)
    }catch(err){
        return res.status(500).send(err)
    }

}
module.exports = {createPost,getAllPost,singlePost,updateSingelPostData}