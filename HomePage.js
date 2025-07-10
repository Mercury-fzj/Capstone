import React, { useState } from 'react';
import './HomePage.css';
import PostItem from './PostItem';

function HomePage({ posts }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = posts.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Electronics', 'Furniture', 'Books', 'Clothing'];

console.log("All posts:", posts);
console.log("Search term:", search);
console.log("Selected category:", category);
console.log("Filtered posts:", filtered);

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Search listings..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="category-nav">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 👇 只展示帖子，不允许删除/发帖 */}
      <PostItem posts={filtered} showDelete={false} />
    </div>
  );
}

export default HomePage;

