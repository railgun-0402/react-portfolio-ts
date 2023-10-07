import React from "react";
import CoverImage from "../images/cover-image.jpg";
import ProfileImage from "../images/profile-image.png";

const Header = () => {
  const componentName = "Header";
  return (
    <header
      className="main-cover"
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div
              className="profile-thumb"
              style={{ backgroundImage: `url(${ProfileImage})` }}
            ></div>
            <h1 className="title-text">すがわら</h1>
            <h3 className="title-text">System Engineer</h3>
            <ul className="social-icons">
              <li className="icon-link">{/* TODO */}</li>
              <li className="icon-link">{/* TODO */}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
