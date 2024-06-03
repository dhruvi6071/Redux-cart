import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first Item",
    description: "This is my first Item.",
  },
  {
    id: "p2",
    price: 6,
    title: "My second Item",
    description: "This is my second Item.",
  },
  {
    id: "p3",
    price: 6,
    title: "My third Item",
    description: "This is my third Item.",
  },
  {
    id: "p4",
    price: 6,
    title: "My fourth Item",
    description: "This is my fourth Item.",
  },
  {
    id: "p5",
    price: 6,
    title: "My fifth Item",
    description: "This is my fifth Item.",
  },
 
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key = {product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
       ))}
        
      </ul>
    </section>
  );
};

export default Products;
