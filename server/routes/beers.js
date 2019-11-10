const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "public/images" });

router.post("/new", upload.single("picture"), (req, res) => {
  res.status(200).json(req.body);
});

module.exports = router;
