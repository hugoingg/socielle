import { Outlet } from "react-router-dom";
import NavigationBar from "./NavBar.tsx";
import Footer from "./footer.tsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
