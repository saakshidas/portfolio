
import styles from '../styles/navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>SD</div>
    <ul className={styles.navLinks}>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact Me</li>
    </ul>
    <button className={styles.cta}>Case Studies</button>
  </nav>
);

export default Navbar;
// import About from "./about";
// import Home from "./home";
// import Link from "next/link";

// function Navbar() {
//   return (
//     <>
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex gap-24">
//         <h1 className="text-white text-2xl">My Portfolio</h1>
//         <ul className="flex justify-end flex-1">
//           <li className="text-white inline-block mr-4">Home</li>
//           <li className="text-white inline-block mr-4"><Link href="/about">About</Link></li>
          
//           <li className="text-white inline-block mr-4">Projects</li>
//           <li className="text-white inline-block mr-4">Skills</li>
//           <li className="text-white inline-block mr-4">Education</li>
//           <li className="text-white inline-block mr-4">Experience</li>
//           <li className="text-white inline-block mr-4">Contact</li>
//           <li className="text-white inline-block mr-4">Blog</li>
//           <li className="text-white inline-block mr-4">Resume</li>
//         </ul>
//       </div>
//     </nav>
//     <div className="container mx-auto">
//       <Home></Home>
//     </div>
//     <div className="container mx-auto">
//      <About></About>
//     </div>

//     </>

//   );
// }

// export default Navbar;
