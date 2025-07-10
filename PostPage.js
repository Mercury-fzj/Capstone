// src/pages/PostPage.js
import React from 'react';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';

function PostPage({ posts, addPost, deletePost }) {
  return (
    <main style={{ padding: '2rem' }}>
      <PostForm addPost={addPost} />
      <PostItem posts={posts} deletePost={deletePost} showDelete={true} />
    </main>
  );
}

export default PostPage;

