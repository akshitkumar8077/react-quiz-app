import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 18, name: "Science: Computers" },
  { id: 21, name: "Sports" },
  // Add more categories as needed
];

const CategorySelection = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectCategory(selectedCategory.id);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Select Category</h5>
        <form onSubmit={handleSubmit}>
          <Dropdown
            onSelect={(eventKey) =>
              handleSelect(
                categories.find((cat) => cat.id === parseInt(eventKey))
              )
            }>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedCategory.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((category) => (
                <Dropdown.Item key={category.id} eventKey={category.id}>
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <button type="submit" className="btn btn-primary mt-3">
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategorySelection;
