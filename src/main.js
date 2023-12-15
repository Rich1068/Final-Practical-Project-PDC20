import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Blog from './Blog/BlogPage';
import Home from './Blog/HomePage';
import About from './AboutUs/AboutPage';
import Contact from './ContactUs/Contact';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoute: sessionStorage.getItem('currentRoute' || 'Home'),
    };
  }

  handleRouteChange = (route) => {
    this.setState({ currentRoute: route });
    sessionStorage.setItem('currentRoute', route);
  };

  render() {

    return (
      <Router>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand"><b>REACT</b>BLOGS</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/home"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('Home')}
                    >
                      Home
                      
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/myblog"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('Create Post')}
                    >
                      Create Post
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/AboutUs"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('About Us')}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/ContactUs"
                      className="nav-link"
                      onClick={() => this.handleRouteChange('Contact')}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div>
        <br></br>
        <br></br>
          <Routes>
            <Route path="/myblog" element={<Blog />} />
            <Route path="/home" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/ContactUs" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
