import { useEffect, useState } from "react";
import FilterProducts from "../../components/FilterProducts/FilterProducts";
import ProductBox from "../../components/ProductBox/ProductBox";
import "./ProductList.css";
import { getAllProducts } from "../../apis/fakeStoreProdApis";
import axios from "axios";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  async function downloadProducts() {
    const response = await axios.get(getAllProducts());
    setProductList(response.data);
  }

  useEffect(() => {
    downloadProducts();
  }, []);

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
