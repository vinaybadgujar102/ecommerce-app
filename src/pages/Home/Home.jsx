import "./Home.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
        <div
          className="category-list d-flex flex-row justify-content-between align-items-center"
          id="categoryList"
        >
          <CategoryItem itemName="All Products" />
        </div>
        <div className="category-title text-center">
          Select a category to start Shopping
        </div>
      </div>
    </div>
  );
};
