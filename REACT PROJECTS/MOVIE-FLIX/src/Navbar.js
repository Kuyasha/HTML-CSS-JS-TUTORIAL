//NAVBAR DESIGN USING CSS MODULE
import styles from "./Navbar.module.css";

function Navbar(props){
        const {cartCount}=props; //receiving cartCount from App through props
        return(
            <>
            <div className={styles.nav}>
               <div className={styles.title}>MOVIE APP</div>
               <div className={styles.cartIconContainer}>
                  <img className={styles.cartIcon} alt="Cart-Icon" src = "https://cdn-icons-png.flaticon.com/128/3643/3643914.png"/>
                  <span className={styles.cartCount}>{cartCount}</span>
               </div>
            </div>
            </>
        );
    }
export default Navbar;



//NAVBAR DESIGN USING STYLED COMPONENTS
  
