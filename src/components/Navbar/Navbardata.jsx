import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faTable } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"

export const Logo = <FontAwesomeIcon icon={faDroplet} />
export const Logout = <FontAwesomeIcon icon={faArrowRightFromBracket} />

export const NavbarData = [
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title:   "Notifications",
        link: "/notifications",
        className: "nav--link"
    },
    {
        icon: <FontAwesomeIcon icon={faUserPlus} />,
        title:   "Add user",
        link: "/form",
        className: "nav--link"
    },
    {
        icon: <FontAwesomeIcon icon={faTable} />,
        title:   "Database",
        link: "/database",
        className: "nav--link"
    },
    {
        icon: <FontAwesomeIcon icon={faCommentDots} />,
        title:   "Messages",
        link: "/message",
        className: "nav--link"
    },
    {
        icon: <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#ffffff",}} />,
        title:   "History",
        link: "/history",
        className: "nav--link"
    }
]