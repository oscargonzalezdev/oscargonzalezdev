import Link from "next/link";
import Footer from "../Layout/Footer"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import styles from './Layout.module.css'

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className={styles.header}>
    <div className={styles.bgHeader}></div>
      <Link href='/'>{'oscarweb.dev'}</Link>
      <nav >
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li onClick={closeMobileMenu}><Link href='/blog'>Blog</Link></li>
          <li onClick={closeMobileMenu}><Link href='/#works'>Works</Link></li>
          <li className="link-contact" onClick={closeMobileMenu}><Link href='/#contact'>Contact</Link></li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseIcon className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </nav>
    </header>
  )
}
function Layout(props) {
  return (
    <div className="layout">
      <NavBar />
      <div className="main-container">
        <main>{props.children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
export default Layout;