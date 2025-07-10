import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PostPage from './pages/PostPage';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  // Load posts from localStorage
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('campusPosts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('campusPosts', JSON.stringify(posts));
  }, [posts]);

  const [user, setUser] = useState(() => {
    return localStorage.getItem('campusUser') || null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('campusUser', user);
  }, [user]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleLogin = (email) => setUser(email);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('campusUser');
  };

  const [showRegister, setShowRegister] = useState(false);

  return (
    <Router>
      <Navbar
      isRegistered={!!user}
      userEmail={user}
      onLogout={handleLogout}
      />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/post" element={<PostPage posts={posts} addPost={addPost} deletePost={deletePost} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                showRegister ? (
                  <Register onRegister={handleLogin} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {!user && (
        <div className="auth-toggle-text">
          {showRegister ? (
            <p>
              Already have an account?{' '}
              <button onClick={() => setShowRegister(false)}>Login</button>
              </p>
              ) : (
              <p>
                Don’t have an account?{' '}
                <button onClick={() => setShowRegister(true)}>Register</button>
                </p>
              )}
              </div>
          )}
    </Router>
  );
}

export default App;




