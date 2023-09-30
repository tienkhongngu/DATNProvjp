import { Outlet, Link } from "react-router-dom";
import "./cssCompoment/layout.css"


const Layout = () => {
  return (
    <>
    <div className="header-layout">
        <ul>
          <li className="header-li">
            <Link className="header-link" to="/">Home</Link>
          </li>

          <div className="header-right">
            <ul>
              <li className="header-li">
                <Link className="header-link" to="/Login">Đăng nhập</Link>
              </li>

              <li className="header-li">
                <Link className="header-link" to="/Register">Đăng kí</Link>
              </li>            
            </ul>
          </div>
        </ul>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;