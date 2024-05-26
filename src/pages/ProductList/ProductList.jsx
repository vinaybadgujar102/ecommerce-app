import ProductBox from "../../components/ProductBox/ProductBox";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-column">
          {/* List of prodcuts /> */}
          <div className="product-list-box" id="productList">
            <ProductBox
              productImage="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              name="Product Name"
              price="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
