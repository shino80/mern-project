const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const postCat = require("./routes/categories");
const dotenv = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({
  storage:storage
})
app.post('/api/upload',upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded ")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", postCat);
app.listen("3000", () => {
  console.log("Be is running ! ");
});
