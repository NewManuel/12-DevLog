//import modules
const router = require("express").Router();
const { BlogPost, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      include: [{ model: User, attributes: ["name"] }],
    });
  
    const blogPosts = blogData.map((bp) => bp.get({ plain: true }));
   
    res.render("homepage", { blogPosts, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blogpost/:id", async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["name"] }],
    });
    if (!postData) {
      res.status(404).json({ message: "No recipe found with this id!" });
      return;
    }

    const post = postData.get({ plain: true });
    res.render("post", { ...post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {

  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/upload", (req, res) => {

  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("upload", { logged_in: req.session.logged_in });
});


router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
    
      req.session.user_id = userData.id; 
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
