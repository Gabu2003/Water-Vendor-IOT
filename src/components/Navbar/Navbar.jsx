import "./Navbar.css"
import {NavbarData, Logo, Logout} from "./Navbardata"

function Navbar() {

    const navElements = NavbarData.map((navBar, index) => {
        return (
            <div key={index} className={navBar.className}>
                <span id="icon">{navBar.icon}</span> 
                <span id="title">{navBar.title}</span>
            </div>
        )
    })

    return (
        <nav>
            <div className="nav--logo">{Logo}</div>
            <div className="nav--links">{navElements}</div>
            <div className="nav--logout">{Logout}</div>
         </nav>
    )
}

export default Navbar