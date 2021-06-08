var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("blog-posts").get();
    const posts = [];
    snapshot.forEach((post) => {
        posts.push({...post.data(), doc_id: post.id});
    });
    res.json(posts);
});

router.post("/add", async (req, res) => {
    const { title, date, content, image, likeCount, comments, ...rest } = req.body;
    // console.log(averageRating);
    const students = [];
    const resp = await db.collection("blog-posts").add({
      title,
      date,
      content,
      image,
      likeCount,
      comments
    });
  
    console.log("Added document to blog-posts with ID: ", resp.id);
    res.sendStatus(200);
  });

router.delete("/delete", async (req, res) => {
    const { doc, ...rest } = req.body;
    const resp = await db.collection("blog-posts").doc(doc).delete();
    console.log("From blog-post, deleted: ", doc);
    res.send("Got a DELETE request");
  });
module.exports = router;