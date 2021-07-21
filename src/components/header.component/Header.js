import './Header.css'
import {Link} from "react-router-dom";

export default function Header () {
  return(
      <div className={"header-box"}>
          <div className={"header"}>
              <ul>
                  <li>
                      <Link to="/users">Users</Link>
                  </li>
              </ul>
          </div>

      </div>
  )
}