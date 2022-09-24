import Link from "next/link";
import Footer from "./Footer"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <nav className="site-navbar">
        <Link href='/'><span id="logo">&nbsp;</span></Link>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li onClick={closeMobileMenu}><Link href='/blog'>Blog</Link></li>
          <li onClick={closeMobileMenu}><Link href='/#works'>Works</Link></li>
          <li onClick={closeMobileMenu}><Link href='/#contact'>Contact</Link></li>
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
      <Footer />
    </div>
  )
}
export default Layout;