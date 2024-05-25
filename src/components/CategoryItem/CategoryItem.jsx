import { Link } from "react-router-dom";

const CategoryItem = ({ itemName }) => {
  return (
    <div className="category-item d-flex align-items-center justify-content-center">
      <Link to="/products">{itemName}</Link>
    </div>
  );
};

export default CategoryItem;
