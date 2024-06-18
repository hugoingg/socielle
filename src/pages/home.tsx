import "../css/home.css";
import React, { useEffect } from "react";
import { SliderFunctionality } from "../slider";
import img1f from "../media/img1f.jpg";
import img2f from "../media/imgf2.jpg";
import img3 from "../media/img3.jpeg";

const HomePage: React.FC = () => {
  useEffect(() => {
    SliderFunctionality();
  }, []);

  return (
    <>
      <div className="homepage-slider">
        <div className="slider">
          <div className="list">
            <div className="item">
              <img src={img1f} />
            </div>
            <div className="item">
              <img src={img2f} />
            </div>
            <div className="item">
              <img src={img3} />
            </div>
          </div>
          <div className="buttons">
            <button className="prev">&lt;</button>
            <button className="next">&gt;</button>
          </div>
          <ul className="dots">
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="header">
        <h1>#SocializeinSocielle</h1>
        <h3>
          Jl. Moh. Yamin No. 181, Tipes, Serengan, Surakarta City, Central Java
          57154
        </h3>
        <ul>
          <li>
            <a>
              <button>Menu</button>
            </a>
          </li>
          <li>
            <a>
              <button id="reservation-btn">Reservation</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="segment">
        <h1>About Us</h1>
        <hr></hr>
        <br></br>
        <p>
          Socielle is a combined concept of an eatery and espresso bar which is
          located in the middle of Solo city. We specialize in fusion Nusantara
          dishes with high-quality ingredients, as well as Indonesian top-graded
          specialty coffee beans for our beloved city's coffee addicts.
        </p>
        <a>
          <button>Find Us</button>
        </a>
      </div>
      <div className="segment">
        <h1>Contacts</h1>
        <hr></hr>
        <br></br>
        <div className="social-icons-home">
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
      </div>
    </>
  );
};

export default HomePage;
