import { Link } from 'react-scroll';

import styles from './Nav.module.scss';

const DesktopNav = () => {
   return(
       <nav className={styles.navWrapper}>
         <img src='./logo_black.png' alt='Kurator Lab Logo'/>
         <div>
          <ul>
            <li>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={1500}>
               Work
            </Link>   
            </li>
            <li>
            <Link activeClass="active" to="packages" spy={true} smooth={true} offset={-70} duration={1500}>
               Price
            </Link>   
            </li>
            <li>
            <Link activeClass="active" to="benefits" spy={true} smooth={true} offset={-70} duration={1500}>
               Benefits
            </Link> 
            </li>
            <li><a href='https://billing.stripe.com/p/login/dR601t7tb8upcBW7ss' target='_blank'>Login</a></li>
          </ul>
         </div>
         <button>
            <Link activeClass="active" to="packages" spy={true} smooth={true} offset={-70} duration={1500}>
               Get Started
            </Link>
         </button>
      </nav>
   ) 
}

export default DesktopNav;