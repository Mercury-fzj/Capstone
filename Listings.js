import React from 'react';

function Listings({ posts }) {
  return (
    <section>
      <h2>Available Listings</h2>
      {posts.length === 0 ? (
        <p>No items listed yet.</p>
      ) : (
        posts.map(post => (
          <div key={post.id}>
            <strong>{post.name}</strong> - {post.price}
            <p>{post.desc}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Listings;
