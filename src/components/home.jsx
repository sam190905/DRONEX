import React, { useRef, useState, lazy, Suspense } from "react";
import { useUser } from "../context/context";
import Header from "./header";
import Footer from "./footer";
import "../../public/home.css";

const Body = lazy(() => import("./body"));
const Slider = lazy(() => import("./slider.jsx"));
const Product = lazy(() => import("./products.jsx"));
const Uses = lazy(() => import("./uses.jsx"));
const Review = lazy(() => import("./review.jsx"));

function Home() {
  const { user } = useUser();
  const targetRef = useRef(null);
  const homeref = useRef(null);
  const [highlightname, sethighlightname] = useState("");

  // Scroll handler function
  const scrollToComponent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("targetRef is null");
    }
  };

  const scrolltohome = () => {
    if (homeref.current) {
      homeref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("homeref is null");
    }
  };

  function sethigh(name) {
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
          <Suspense fallback={<div>Loading Body...</div>}>
            <Body className="b1" />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading Slider...</div>}>
          <Slider className="b2" />
        </Suspense>
        <div ref={targetRef} className="outerclass">
          <Suspense fallback={<div>Loading Products...</div>}>
            <Product
              className="products"
              highname={highlightname}
              scroll={scrollToComponent}
            />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading Uses...</div>}>
          <Uses className="Usesclass" />
        </Suspense>
        <Suspense fallback={<div>Loading Reviews...</div>}>
          <Review />
        </Suspense>
        <Footer scroll={scrollToComponent} className="footerclass" />
      </div>
    </div>
  );
}

export default Home;
