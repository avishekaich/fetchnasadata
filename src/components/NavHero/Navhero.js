import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navhero = () => {
  let location = useLocation();
  useEffect(() => {
    //ga.send(["pageview", location.pathname]);
    //console.log(location.pathname);
  }, [location]);

  return (
    <>
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/" className="navbar-brand p-0">
              <h1 className="text-primary mb-0">
                {/* <i className="fab fa-slack me-2"></i> LifeSure */}
                <i className="fab fa-slack me-2"></i> TestFile
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link
                  to={"/"}
                  className={`nav-item nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to={"/About"}
                  className={`nav-item nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  to={"/Homepage"}
                  className={`nav-item nav-link ${
                    location.pathname === "/Homepage" ? "active" : ""
                  }`}
                >
                  Services
                </Link>
                <a href="blog.html" className="nav-item nav-link">
                  Blog
                </a>
                <div className="nav-item dropdown">
                  <a href="/" className="nav-link" data-bs-toggle="dropdown">
                    <span className="dropdown-toggle">Pages</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="feature.html" className="dropdown-item">
                      Our Features
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="FAQ.html" className="dropdown-item">
                      FAQs
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <Link to={"/Contact"} className={`nav-item nav-link ${
                    location.pathname === "/Contact" ? "active" : ""
                  }`}>
                  Contact
                </Link>
                <div className="nav-btn px-3">
                  <button
                    className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <a
                    href="/"
                    className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"
                  >
                    {" "}
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navhero;
