import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";

function HeaderCartButton(props) {
  const [btnHighlight, setBtnHiglight] = useState(false);
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const totalItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  function HandleClick() {
    props.onClick(true);
  }

  const { items } = cartCtx;  
  const btnClasses = `${classes.button} ${btnHighlight && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHiglight(true);

    const timer = setTimeout(() => {
      setBtnHiglight(false);
    }, 300);

    return () => {
      clearTimeout(timer); 
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={HandleClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
}

export default HeaderCartButton;
