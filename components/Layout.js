import Link from "next/link";
import Footer from "./Footer"

export function NavBar() {
  return (
    <header className="header">
      <span id="logo"><Link href='/'>{'< OG />'}</Link></span>
      <nav>
        <ul className="flex-row">
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
  return (
    <div className="main-container">
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
export default Layout;