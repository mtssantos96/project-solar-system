import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_list">
          <div className="list-item">
            <a
              href="https://www.linkedin.com/in/matheussantpsdev/"
              target="_blank"
              className="list-link"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="list-item">
            <a
              href="https://github.com/mtssantos96"
              target="_blank"
              className="list-link"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <h2>Matheus Santos &copy;</h2>
      </footer>);
  }
}

export default Footer;
