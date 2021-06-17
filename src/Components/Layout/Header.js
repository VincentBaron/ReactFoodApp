import React, { useState} from 'react'
import meals from "../../Assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "../UI/HeaderCartButton"


function Header(props) {
    return (
        <React.Fragment>
             <header className={classes.header}>
                 <h1>Vinny's Food</h1>
                 <HeaderCartButton onClick={props.handleCart}/>
             </header>
             <div className={classes['main-image']}>
                 <img src={meals}/>
             </div>
        </React.Fragment>
    )
}

export default Header