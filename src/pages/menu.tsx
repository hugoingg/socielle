import menubook from "../media/menu book.pdf";
import "../css/menu.css";
function MenuPage() {
  return (
    <div className="menu-container">
      <object className="menu-book" data={menubook}></object>
    </div>
  );
}

export default MenuPage;
