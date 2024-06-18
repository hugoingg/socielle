import menubook from "../media/menu book.pdf";
import "../css/menu.css";
function MenuPage() {
  return (
    <div className="menu-container">
      <iframe className="menu-book" src={menubook}></iframe>
    </div>
  );
}

export default MenuPage;
