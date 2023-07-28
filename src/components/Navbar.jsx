import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className=" mt-2 navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Job and Internship Portal
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mt-1">
              <Link className="btn btn-success fw-bold btn-sm" to="/">
                See Jobs
              </Link>
               <Link className="btn btn-success fw-bold btn-sm" to="https://let-s-code-ten.vercel.app/">
                Back to Homepage
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
