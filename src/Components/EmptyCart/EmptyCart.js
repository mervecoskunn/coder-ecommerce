import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './emptycart.module.scss'
import cart from '../../assets/cart.png'

const EmptyCart= () =>{
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <div className={styles.emptyCart}>
            <img src={cart} alt="empty cart" />
            <button onClick={()=>navigate("/")}
            className='btn btn-primary'>
              Go Back to Add Some Products
            </button>
        </div>
        </div>
  )
}
export default EmptyCart;
