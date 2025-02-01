import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} from "../controllers/postController.js";
import upload from "../middleware/uploadMiddleware.js";


const router = express.Router();

router.post("/create-post", upload.single("image"), createPost);

router.get("/getallposts", getAllPosts);

router.get("/single-post/:id", getSinglePost);

router.put("/update-post/:id", upload.single("image"), updatePost);

router.delete("/delete-post/:id", deletePost);

export default router;
