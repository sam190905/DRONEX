import React, { useRef, useState } from "react";
import { useUser } from "../context/context";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
import Slider from "./slider.jsx";
import Product from "./products.jsx";
import Uses from "./uses.jsx";
import "../../public/home.css";
import Review from "./review.jsx";

function Home() {
  const { user } = useUser();
  const targetRef = useRef(null);
  const homeref = useRef(null);

  // Scroll handler function
  const scrollToComponent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("targetRef is null"); // Debug log
    }
  };

  const scrolltohome = () => {
    if (homeref.current) {
      homeref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("homeref is null"); // Debug log
    }
  };
const [highlightname,sethighlightname]=useState("");
function sethigh(name){
sethighlightname(name);
}
  return (
    <div>
      <Header
        scroll={scrollToComponent}
        gohome={scrolltohome}
        sethigh={sethigh}
        className="headerclass"
      />
      <div className="homeclass">
        <div ref={homeref}>
          {" "}
          <Body className="b1" />
        </div>
        <Slider className="b2" />
        <div ref={targetRef} className="outerclass">
          <Product className="products" highname={highlightname} scroll={scrollToComponent} />
        </div>
        <Uses className="Usesclass" />
        <Review />
        <Footer  scroll={scrollToComponent} className="footerclass" />
      </div>
    </div>
  );
}

export default Home;
