import styles from './Nav.module.scss';

const DesktopNav = () => {
   return(
       <nav className={styles.navWrapper}>
         <img src='./logo_black.png' alt='Pixel Bloom Logo'/>
         <div>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>Price</li>
            <li>FAQs</li>
            <li><a href='https://billing.stripe.com/p/login/dR601t7tb8upcBW7ss' target='_blank'>Login</a></li>
          </ul>
         </div>
         <button> Get Started</button>
      </nav>
   ) 
}

export default DesktopNav;