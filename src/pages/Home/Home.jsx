import "./Home.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../apis/fakeStoreProdApis";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  async function downloadCategories() {
    const response = await axios.get(getAllCategories());
    setCategories(response.data);
  }

  useEffect(() => {
    downloadCategories();
  }, []);

  return (
    <div className="container welcome-wrapper">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
        <div
          className="category-list d-flex flex-row justify-content-between align-items-center"
          id="categoryList"
        >
          <CategoryItem itemName="All Products" />
          {categories &&
            categories.map((category) => (
              <CategoryItem
                itemName={category}
                key={category}
                filter={category}
              />
            ))}
        </div>
        <div className="category-title text-center">
          Select a category to start Shopping
        </div>
      </div>
    </div>
  );
};
