import "../styles/product.css";

import { useDispatchCart } from "../stateManagement/provider";

function ProductItem({ product }) {
  const dispatch = useDispatchCart();

  const handleAddCart = (item) => {
    return dispatch({ type: "ADD_CART", item });
  };

  return (
    <div className="product-box mt-4">
      <div className="image-box">
        <img alt="product" src={product.imageUrl} className="w-100 h-100" />
      </div>
      <div className="body">
        <h5 className="product-name">{product.type}</h5>
        <p className="description">{product.description}</p>
        <h6 className="price">${product.price}</h6>
      </div>
      <button className="product-btn" onClick={() => handleAddCart(product)}>
        ADD TO CART
      </button>

      <div className="product-badge">SALE</div>
    </div>
  );
}

export default ProductItem;
