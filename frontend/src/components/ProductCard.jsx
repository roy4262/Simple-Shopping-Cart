import PropTypes from "prop-types";

function ProductCard({ product, onAddToCart }) {
  const { id, name, price, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} loading="lazy" />
      <h2>{name}</h2>
      <p className="price">${price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        aria-label={`Add ${name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
