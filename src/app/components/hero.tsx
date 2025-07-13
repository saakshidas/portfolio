import styles from '../styles/hero.module.css';
import Image from 'next/image';
import avatar from '../assests/images/avatar.jpg'; // Use your illustration

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.left}>
      <p className={styles.greeting}>HI THERE <span>👋</span> I'M</p>
      <h1 className={styles.name}>Saakshi<br />Das</h1>
      <h2 className={styles.role}>SOFTWARE DEVELOPER + DATA ANALYST <span>👩🏽‍💻</span></h2>
      <p className={styles.desc}>
        I'm a professional Software developer with front end development skills and data analysis skills.
      </p>
      <button className={styles.hireMe}>Hire Me</button>
    </div>
    <div className={styles.right}>
      <Image src={avatar} alt="Avatar" className={styles.avatar} />
      {/* Decorative shapes */}
      <div className={styles.square1}></div>
      <div className={styles.square2}></div>
      <div className={styles.circle}></div>
    </div>
  </section>
);

export default Hero;