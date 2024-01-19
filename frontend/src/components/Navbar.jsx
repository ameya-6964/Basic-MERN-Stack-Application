import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div className="flex">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <>
              <div className="anchors">
                <Link to="/login">Login</Link>
              </div>
              <div className="anchors">
                <Link to="/logout">Logout</Link>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
