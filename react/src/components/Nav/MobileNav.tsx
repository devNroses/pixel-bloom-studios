import styles from './Nav.module.scss';

const MobileNav = () => {
    return(
        <nav className={styles.navWrapper}>
           <img src='./logo_black.png' className={styles.mobileLogo} alt="Kurator Lab logo" />
           <button className={styles.mobileButton}> Get Started </button>
        </nav>
    )
}

export default MobileNav;