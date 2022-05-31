import Link from "next/link";
import classes from "./Layout.module.css"
export function NavBar() {
    return (
        <header className={classes.header}>
        <div className={classes.logo}>Oscar Gonzalez</div>
        <nav>
          <ul>
            <li>
              <Link href='/works'>Works</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
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
        <main className={classes.main}>{props.children}</main>
        </>
    )
}
export default Layout;