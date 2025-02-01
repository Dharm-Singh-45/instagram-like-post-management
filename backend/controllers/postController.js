import PostModel from "../models/Post.js";

// create post
export const createPost = async (req, res) => {
  try {
    // Validate required fields
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    // Ensure an image is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image is required." });
    }

    // Get uploaded image URL
    const imageUrl = `/uploads/${req.file.filename}`;

    const post = new PostModel({ title, description, imageUrl });
    await post.save();

    res.status(201).json({ message: "Post created successfully!", post });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// get all post

export const getAllPosts = async (req, res) => {
  try {
    // Fetch posts sorted by latest
    const posts = await PostModel.find().sort({ createdAt: -1 });

    // Check if posts exist
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found." });
    }

    res.status(200).json({ success: true, count: posts.length, posts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// get single post

export const getSinglePost = async (req, res) => {
  try {
    // Validate if ID is provided
    if (!req.params.id) {
      return res.status(400).json({ message: "Post ID is required." });
    }

    // Fetch the post by ID
    const post = await PostModel.findById(req.params.id);

    // Check if post exists
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    res.status(200).json({ success: true, post });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};


// update post

export const updatePost = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required.' });
    }

    let imageUrl = req.file
      ? `/uploads/${req.file.filename}`
      : req.body.imageUrl;

    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// delete post

export const deletePost = async (req, res) => {
  try {
    const post = await PostModel.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

