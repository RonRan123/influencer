var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
    const snapshot = await db.collection("cart").get();
    const cart = [];
    snapshot.forEach((item) => {
        cart.push({...item.data(), doc_id: item.id});
    });
    res.json(cart);
});

router.post("/add", async (req, res) => {
    const { title, price } = req.body;
    const resp = await db.collection("cart").add({
      title, price
    });

    console.log("added document to cart with ID: " , resp.id);
    res.sendStatus(200);
});


router.delete("/delete", async (req, res) => {
    const { productID, ...rest } = req.body;
    const resp = await db.collection("cart").doc(doc).delete();
    console.log("From products, deleted: ", productID);
    res.send("Got a DELETE request for cart");
  });  


module.exports = router;