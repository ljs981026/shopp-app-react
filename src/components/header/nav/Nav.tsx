import React from 'react'
import { FiLogIn, FiShoppingCart, FiUser } from 'react-icons/fi'
import { GoSignOut } from 'react-icons/go'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import { signOut, getAuth } from 'firebase/auth';
import app from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { removeUser } from '../../../store/user/user.slice';
import { removeUserId } from '../../../store/cart/cart.slice';
import NavCartBlock from './nav-cart-block/NavCartBlock';

const Nav = () => {
  const { isAuth } = useAuth(app);
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      dispatch(removeUser());
      dispatch(removeUserId());      
    })
    .catch(() => {

    })
  }
  
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"/cart"}>
              {" "}
              <FiShoppingCart />
            </Link>
            {products.length > 0 && <b>2</b>}
            {products.length > 0 && 
              <div className={styles.nav_hover_cart}>
                <NavCartBlock />
              </div>              
            }
          </div>
        </li>
        <li>
          <div className={styles.couter}> 
            <Link to={"/order"}>
              {" "}
              <FiUser title='주문'/>
            </Link>            
          </div>
        </li>  
        <li>
          {
            isAuth ?
            <GoSignOut className={styles.nav_sign_out} 
            onClick={handleSignOut}
            title='로그아웃'/>
            :
            <Link to={'/login'}>
              <FiLogIn title='로그인' />
            </Link>
          }
        </li>                 
      </ul>
    </nav>
  )
}

export default Nav