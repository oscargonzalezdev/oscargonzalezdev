import Link from "next/link";
import Footer from "./Footer"
export function NavBar() {
    return (
        <header className="header">
        <Link href='/'>{'< OscarGonzalez />'}</Link>
        <nav className="navbar">
          <ul>
            <li>
              <Link href='#works'>Works</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}
function Layout(props) {
    return(
        <>
        <NavBar />
        <main>{props.children}</main>
        <Footer />
        </>
    )
}
export default Layout;