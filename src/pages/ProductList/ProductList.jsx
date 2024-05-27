import { useEffect, useState } from "react";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import ProductBox from "../../components/ProductBox/ProductBox";
import "./ProductList.css";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../apis/fakeStoreProdApis";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  async function downloadProducts(category) {
    const downloadUrl = category
      ? getAllProductsByCategory(category)
      : getAllProducts();
    const response = await axios.get(downloadUrl);
    setProductList(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    downloadProducts(query.get("category"));
  }, [query.get("category")]);

  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          <FilterProducts />
          {/* List of prodcuts /> */}
          <div className="product-list-box" id="productList">
            {productList &&
              productList.map((product) => (
                <ProductBox
                  key={product.id}
                  productImage={product.image}
                  name={product.title}
                  price={product.price}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
