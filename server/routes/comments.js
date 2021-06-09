var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("comments").get();
    const comments = [];
    snapshot.forEach((c) => {
        comments.push({...c.data(), doc_id: c.id});
    });
    res.json(comments);
});

router.get("/getFromForum", async(req, res)=>{
    try{
        const forumId = req.query.forumId
        const commentsFiltered = await db.collection("comments").where('postID', '==', forumId).get()
        const commentsList = []
        commentsFiltered.forEach((comment)=>{
            commentsList.push({...comment.data(), doc_id:comment.id})
        })
        res.json(commentsList)
    }catch(err){
        console.log("Error in getFromForum: ", err)
        res.sendStatus(500)
    }
})

router.post("/add", async (req, res) => {
    const { content, date, dislikes, likes, postID, user, ...rest } = req.body;
    const resp = await db.collection("comments").add({
        content, 
        date, 
        dislikes, 
        likes, 
        postID, 
        user
    });
  
    console.log("Added document to comments with ID: ", resp.id);
    res.sendStatus(200);
  });


router.delete("/delete", async (req, res) => {
    const {doc_id, ...rest} = req.body;
    const resp = await db.collection("comments").doc(doc_id).delete();
    console.log("From comments, deleted: ", doc_id);
    res.send("Got a DELETE request for comments");
});

router.put("/update", async (req, res) => {
    const { doc_id, content, date, dislikes, likes, postID, user, ...rest } = req.body;
    const resp = await db.collection("comments").doc(doc_id).update({
        content: content, 
        date: date, 
        dislikes: dislikes, 
        likes: likes, 
        postID: postID, 
        user: user
    });
  
    res.send("Got a put request to update a comment");
});

module.exports = router;