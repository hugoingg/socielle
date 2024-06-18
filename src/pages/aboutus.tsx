import "../css/aboutus.css";
import abtush from "../media/abtusheader.jpg";
function AboutUs() {
  return (
    <>
      <div className="about-us-header">
        <img src={abtush}></img>
        <div className="header-text">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-us">
        <p>
          Socielle is a combined concept of an eatery and espresso bar which is
          located in the middle of Solo city. We specialize in fusion Nusantara
          dishes with high-quality ingredients, as well as Indonesian top-graded
          specialty coffee beans for our beloved city's coffee addicts.
        </p>
        <p>
          Socielle itself represents the word social where people can gather up
          to meet and socialize accompanied by an excellent experience of food
          and beverage products.
        </p>
        <blockquote>#SocializeinSocielle</blockquote>
      </div>
    </>
  );
}
export default AboutUs;
