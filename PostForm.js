// src/pages/Post.js
import React, { useState } from 'react';
import PostItem from '../components/PostItem';

function PostForm({ posts, addPost, deletePost }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    addPost({
      title,
      description,
      category,
      price,
      originalPrice,
      image,
    });

    setTitle('');
    setDescription('');
    setCategory('Electronics');
    setPrice('');
    setOriginalPrice('');
    setImage(null);
  };

  return (
    <div className="post-page">
      <h2>Publish New Item</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Books</option>
          <option>Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Original Price ($)"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && <img src={image} alt="Preview" className="image-preview" />}
        <button type="submit" className="publish-btn">Publish</button>
      </form>

      {/* User's own posts */}
      <PostItem posts={posts} deletePost={deletePost} showDelete={true} />
    </div>
  );
}

export default PostForm;

