import "../css/menu.css";
import "../css/home.css";
import "../css/aboutus.css";
import menuh from "../media/menuh.jpg";
function MenuPage() {
  return (
    <>
      <div className="about-us-header">
        <img src={menuh}></img>
        <div className="header-text">
          <h1>Menu</h1>
        </div>
      </div>
      <div className="menu-container">
        <ul>
          <li>
            <a className="m-b" href="#menu">
              <div className="block">
                <h1>Menu</h1>
              </div>
            </a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a className="rb-b" href="#booking">
              <div className="block">
                <h1>Booking</h1>
              </div>
            </a>
          </li>
        </ul>
        <div className="segment" id="menu">
          <h1 className="menu-segment">Our Menu</h1>
          <hr></hr>
          <br></br>
          <iframe
            allowFullScreen
            className="fp-iframe"
            src="https://heyzine.com/flip-book/7867e53c6a.html"
            style={{
              border: "0px",
              width: "100%",
              height: "333px",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
        <div className="segment" id="booking">
          <h1 className="menu-segment">Room Booking</h1>
          <hr></hr>
          <br></br>
          <iframe
            allowFullScreen
            className="fp-iframe"
            src="https://heyzine.com/flip-book/975f728cf8.html"
            style={{
              border: "1px solid lightgray",
              width: "100%",
              height: "174px",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
