
import React from 'react';
import './PostItem.css';

function PostItem({ posts, deletePost, showDelete = false }) {
  if (!posts || posts.length === 0) {
    return <p className="no-items">No items found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>Price: ${post.price}</p>
          <p>Original Price: ${post.originalPrice}</p>
          <p><strong>Category:</strong> {post.category}</p>
          {post.image && <img src={post.image} alt="item" className="image-preview" />}
          {showDelete && (
            <button
              className="delete-button"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PostItem;


