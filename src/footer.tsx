import "./css/footer.css";

function Footer() {
  return (
    <div className="overall-footer">
      <div className="footer-container">
        <div className="social-icons">
          <ul>
            <li>
              <i className="fa-brands fa-instagram">
                <a href="#"></a>
              </i>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp">
                <a href="#"></a>
              </i>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end-line">
        <h3>Socielle 2024</h3>
      </div>
    </div>
  );
}

export default Footer;
