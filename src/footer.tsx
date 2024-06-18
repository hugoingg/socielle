import "./css/footer.css";

function Footer() {
  return (
    <div className="overall-footer">
      <div className="footer-container">
        <div className="social-icons">
          <ul>
            <li>
              <i className="fa-brands fa-instagram">
                <a href="https://www.instagram.com/socielle.id?igsh=azNtaWt5eXB5NXVw"></a>
              </i>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp">
                <a href="https://wa.me/6287731131107"></a>
              </i>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="/socielle/menu">Menu</a>
            </li>
            <li>
              <a href="/socielle/aboutus">About Us</a>
            </li>
            <li>
              <a href="/socielle/contacts">Contacts</a>
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
