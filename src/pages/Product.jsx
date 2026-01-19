import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    title: "Women's Stylish Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1520975682031-a2a5f0e7f3c8",
  },
  {
    id: 3,
    title: "Hoodie Jacket",
    price: 1499,
    image: "https://images.unsplash.com/photo-1542068829-1115f7259450",
  },
];

function Products() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
