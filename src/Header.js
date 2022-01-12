import { Link } from "react-router-dom";
const Header = ({ selected }) => {
  return (
    <div className="header">
      <div className="nav">
        <div
          className={`nav-link ${
            selected === "new-order" ? "selected-nav-link" : null
          }`}
        >
          <Link to="/new-order">Create New Order</Link>
        </div>
        <div
          className={`nav-link ${
            selected === "current-orders" ? "selected-nav-link" : null
          }`}
        >
          <Link to="/">View Current Orders</Link>
        </div>
        <div
          className={`nav-link ${
            selected === "all-orders" ? "selected-nav-link" : null
          }`}
        >
          View All Orders
        </div>
      </div>
      <div className="user-info">
        <div className="welcome-info">
          Welcome, <span className="name">AKRAM</span>
        </div>
        <div className="signout">SIGNOUT</div>
      </div>
    </div>
  );
};

export default Header;
