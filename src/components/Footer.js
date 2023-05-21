import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_list">
          <div className="list-item">
            <a href="https://www.linkedin.com/in/matheussantpsdev/" className="list-link">
              <FaLinkedin />
            </a>
          </div>
          <div className="list-item">
            <a href="https://github.com/mtssantos96" className="list-link">
              <FaGithub />
            </a>
          </div>
        </div>
        <h1>Matheus Santos &copy;</h1>
      </footer>);
  }
}

export default Footer;
