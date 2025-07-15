
import styles from '../styles/navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>SD</div>
    <ul className={styles.navLinks}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>
    <button className={styles.cta}>Case Studies</button>
  </nav>
);

export default Navbar;