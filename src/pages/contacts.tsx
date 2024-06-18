import "../css/aboutus.css";
import "../css/contacts.css";
import cntcsh from "../media/cntcsheader.jpg";
function Contacts() {
  return (
    <>
      <div className="about-us-header">
        <img src={cntcsh}></img>
        <div className="header-text">
          <h1>Contacs</h1>
        </div>
      </div>
      <div className="contacts">
        <a className="card" href="#">
          <div>
            <i className="fa-brands fa-whatsapp"></i>
            <h1>Whatsapp</h1>
            <h2>+62 877-3113-1107</h2>
            <br></br>
            <h3>Reservation via our Whatsapp.</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div>
            <i className="fa-brands fa-instagram"></i>
            <h1>Instagram</h1>
            <h2>@socielle.id</h2>
            <br></br>
            <h3>Follow to know our promotions first hand.</h3>
          </div>
        </a>
      </div>
    </>
  );
}
export default Contacts;
