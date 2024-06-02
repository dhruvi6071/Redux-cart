import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

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

const ProductItem = (props) => {
  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
