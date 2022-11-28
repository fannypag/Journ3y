const express = require("express");
const { fetchAllPost } = require("../controllers/api");
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchPostByID);
router.post("/", API.createPost);
router.patch("/:id", API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router; 