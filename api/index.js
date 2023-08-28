const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const postCat = require("./routes/categories");
const dotenv = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// deploy link

// app.use(
//   cors({
//     origin: ["http://localhost:8000", "http://goraku.onrender.com"],
//   })
// );

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
  storage: storage,
});
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded ");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", postCat);
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Be is running " + PORT);
});
