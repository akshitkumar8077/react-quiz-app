import React, { useState } from "react";

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 18, name: "Science: Computers" },
  { id: 21, name: "Sports" },
  // Add more categories as needed
];

const CategorySelection = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectCategory(selectedCategory);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Select Category</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              className="form-control"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategorySelection;
