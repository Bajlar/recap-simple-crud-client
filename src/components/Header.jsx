import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex justify-center">
        <a className="btn btn-ghost normal-case text-3xl">UserCollection</a>
        <div>
          <Link className="normal-case text-2xl mr-4" to='/'>Home</Link>
          <Link className="normal-case text-2xl" to='/users'>Users</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;