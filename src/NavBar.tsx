import "./css/NavBar.css";
import logo from "./media/Logo Socielle-04.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function showSideBar() {
  const sidebar = document.querySelector(".sideBar") as HTMLElement | null;
  if (sidebar) {
    sidebar.style.display = "flex";
  }
}
function hideSideBar() {
  const sidebar = document.querySelector(".sideBar") as HTMLElement | null;
  if (sidebar) {
    sidebar.style.display = "none";
  }
}
function NavigationBar() {
  return (
    <div className="NavBar-body">
      <nav>
        <ul className="sideBar">
          <li onClick={() => hideSideBar()}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="rgb(255,255,255)"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
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
        <ul>
          <li>
            <a href="/socielle/" className="nav-title">
              <img src={logo} className="logo"></img>
            </a>
          </li>
          <li>
            <a href="/socielle/menu" className="hideOnMoblie">
              Menu
            </a>
          </li>
          <li>
            <a href="/socielle/aboutus" className="hideOnMoblie">
              About Us
            </a>
          </li>
          <li>
            <a href="/socielle/contacts" className="hideOnMoblie">
              Contacts
            </a>
          </li>
          <li className="menu-button" onClick={() => showSideBar()}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="rgb(255, 255, 255)"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavigationBar;
