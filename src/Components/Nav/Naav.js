import React from 'react'
import { Container, Nav,Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import{AiOutlineShoppingCart}from "react-icons/ai"
import styles from "./naav.module.scss"



 const Naav = () => {
  const menus =[
    {
      name: "Home",
      id:1,
      path:"/"
    },
    {
      name:"About Us",
      id:2,
      path:"/about"
    },
    {
      name:"WishList",
      id:3,
      path:"/wishlist"
    },
  
  ]
  return (
   <div>
    {/* <NavLink to ="/">Home Page</NavLink>
    <NavLink to ="/About">About</NavLink>
    <NavLink to="/Cart">Cart</NavLink>
    <NavLink to="/ErrorPage">Error Page</NavLink>
    <NavLink to="/">Cart</NavLink>
    <NavLink to="/Cart">Cart</NavLink> */}
    <Navbar expand ="lg" className ={`${styles.navBar}`}fixed-top>
      <Container>
        <Navbar.Brand>
          <NavLink to ="/" className={`${styles.navLink} text-uppercase`}>Coder Ecommerce</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScrooll"/>
          <Navbar.Collapse id="navbarScrooll">
          <Nav classsName="ms-auto my-2 my-lg-0" style={{maxHeight:"100px"}} navbarScrooll>
            {
            menus.map((menu) =>(
              <NavLink
              key={menu.id}
              to={menu.path}
              className={`${styles.navLink} ${styles.menuLink}`}>
              {menu.name}
              </NavLink>                          
              ))
            
            }
            <NavLink
            to="/cart"
            className={`${styles.navLink}${styles.cartIcon}`}>
              <AiOutlineShoppingCart size={23} />{" "}
              <div classsName ={ styles.cartLength}>
                <h6>5</h6>
              </div>
              
            </NavLink>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>


   </div>
  );
}
export default Naav;