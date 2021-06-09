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

module.export = router;