import menubook from "../media/menu book.pdf";
import "../css/menu.css";
function MenuPage() {
  return (
    <div className="menu-container">
      <iframe className="menu-book" src={menubook}>
        <p>
          We apologize for the inconvenience, but there was an error. Please
          view our menu <a href="google.com">here!</a>
        </p>
      </iframe>
    </div>
  );
}

export default MenuPage;
