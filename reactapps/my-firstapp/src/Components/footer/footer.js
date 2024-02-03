import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const footer={
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "red",
        color: "white",
        textAlign: "center"
    }
  return (
    <footer className="bg-body-tertiary text-center mt-auto" styles={footer}>
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {/* Social Media Icons */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          {/* Twitter */}
          <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#55acee' }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            {/* Google */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#dd4b39' }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>

            {/* Instagram */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#ac2bac' }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* LinkedIn */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#0082ca' }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            {/* GitHub */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#333333' }}
              href="#!"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>

       

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        {/* Copyright text */}
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;







            