const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
// CREATE NEW POST
const bcrypt = require("bcrypt");
router.post("/", async (req, res) => {
  const newPost =  new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE POST

// DELETE POST

// router.delete("/:id", async (req, res) => {
//   if (req.body.userId === req.params.id) {
//     try {
//       const user = await User.findById(req.params.id);
//       if (user) {
//         try {
//           await Post.deleteMany({ username: user.username });
//           await User.findByIdAndDelete(req.params.id);
//           res.status(200).json("User deleted successfully!");
//         } catch (err) {
//           res.status(500).json("Error deleting user");
//         }
//       } else {
//         res.status(404).json("User not found");
//       }
//     } catch (error) {
//       res.status(500).json("An error occurred");
//     }
//   } else {
//     res.status(401).json("You can delete only your account ! ");
//   }
// });
// // GET POST
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;
