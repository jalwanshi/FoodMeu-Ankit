import React, { useState } from 'react';
import data from './data/data'; // Importing data from data.js
import './Menu.css'; // Importing Menu component CSS

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extracting unique categories from data
  const categories = [...new Set(data.map(item => item.category))];

  // Function to filter items by category
  const filterItemsByCategory = (category) => {
    setSelectedCategory(category);
  };

  // Function to format rate to rupees
  const formatRateToRupees = (rate) => {
    return `₹${rate}`;
  };

  // Filtering items by selected category
  const filteredItems = selectedCategory
    ? data.filter(item => item.category === selectedCategory)
    : data;

  return (
    <div className="Menu">
      {/* Restaurant Name Header */}
      <h1 className="restaurant-name"><span>👨‍🍳</span> Cartoonish Restro <span>👨‍🍳</span></h1>
      
      {/* Header */}
      <h2>📋Menu📋</h2>

      {/* Displaying category links */}
      <ul className="categories">
        <li><button onClick={() => filterItemsByCategory(null)}>All</button></li>
        {categories.map(category => (
          <li key={category}>
            <button onClick={() => filterItemsByCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>

      {/* Displaying food items */}
      <ul className="items">
        {filteredItems.map(item => (
          <li key={item.id}>
            {/* Update image path here */}
            <img src={`./images/${item.image}`} alt={item.name} />
            <div>{item.name}</div>
            <div>Category: {item.category}</div>
            <div>Rate: {formatRateToRupees(item.rate)}</div> {/* Format rate to rupees */}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Cartoonish Restro | Designed & Developed by Ankit</p>
      </footer>
    </div>
  );
};

export default Menu;
