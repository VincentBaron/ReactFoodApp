import { useContext } from 'react'
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/cart-context'

function MealItem(props) {
  const cartCtx = useContext(CartContext)
  const price = `$${props.object.price.toFixed(2)}`

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.object.id,
      name: props.object.name,
      amount: amount,
      price: props.object.price
    })
  }

  return (
    <li className={classes.meal} key={props.object.id}>
      <div>
        <h3>{props.object.name}</h3>
        <div className={classes.description}>{props.object.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
      <div>
      <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;
