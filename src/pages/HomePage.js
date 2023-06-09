import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";
import SaleBox from "../components/Product/SaleBox";

export default function HomePage() {
  const [productList, setProductList] = useState(ProductData);

  const deleteTask = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  const checkTask = (id) => {
    setProductList(
      productList.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  return (
    <div className="container">
      <SaleBox />
      <Products
        productList={productList}
        handelDelete={deleteTask}
        handelChecked={checkTask}
      />
    </div>
  );
}