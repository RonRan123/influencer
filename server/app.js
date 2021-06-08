var express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const blogRouter = require("./routes/blogPosts");

var app = express();
app.use(cors());
app.use(express.json());


app.use("/blog", blogRouter);

app.get("/", (req, res) => {
    res.send('Server is live from influencer project!');
  });

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})