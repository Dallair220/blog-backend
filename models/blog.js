const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema to define the structure
const blogSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create model based on the schema above | name: singular of collection (blogs)
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
