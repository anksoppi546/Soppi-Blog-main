const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the Post schema and model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

// Define home and other content
const homeStartingContent = "";
const additionalHomeContent = {
  title: "Welcome to Ankit Soppi Blog!",
  description: "Explore a variety of interesting articles, news, and insights. Stay tuned for updates and new posts!",
  image: "https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f.png" 
};

// Route to render home page with posts from database
app.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // Sort posts by creation time in descending order
    res.render("home", {
      startingContent: homeStartingContent,
      additionalContent: additionalHomeContent,
      posts: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// About and Contact pages
const aboutStartingContent = "That's all, Thank You! for exploring my website.";
const contactStartingContent = "Please note that spamming may lead you to judiciary actions.";

app.get("/about", (req, res) => {
  res.render("about", { startingContent: aboutStartingContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { startingContent: contactStartingContent });
});

// Render compose page
app.get("/compose", (req, res) => {
  res.render("compose");
});

// Handle new post submission
app.post("/compose", async (req, res) => {
  try {
    const post = new Post({
      title: req.body.postTitle,
      content: req.body.postBody
    });
    await post.save(); // Save the new post to MongoDB
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Render individual post based on title
app.get("/posts/:postName", async (req, res) => {
  try {
    const requestedTitle = _.lowerCase(req.params.postName);
    const post = await Post.findOne({ title: new RegExp(requestedTitle, 'i') }); // Find the post in MongoDB

    if (post) {
      res.render("post", {
        title: post.title,
        content: post.content,
        date: post.createdAt 
      });
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
