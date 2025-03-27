import React, { useState } from "react";
import "../../public/products.css";

const drones = [
  {
    Name: "DJI Neo",
    price: "₹74,000",
    imgurl: "/media/drones/djineo.png",
    explore: "https://www.dji.com/global/neo",
  },
  {
    Name: "DJI Mavic 3 Pro",
    price: "₹1,80,000",
    imgurl: "/media/drones/djimavic3pro.png",
    explore: "https://www.dji.com/global/mavic-3-pro",
  },
  {
    Name: "DJI Flycart 30",
    price: "₹14,00,000",
    imgurl: "/media/drones/djiflycart30.png",
    explore: "https://www.dji.com/global/flycart-30",
  },
  {
    Name: "DJI Flip",
    price: "₹1,10,000",
    imgurl: "/media/drones/djiflip.png",
    explore: "https://www.dji.com/global/flip",
  },
  {
    Name: "OSMO Pocket 3",
    price: "₹44,000",
    imgurl: "/media/drones/djiosmopocket3.png",
    explore: "https://www.dji.com/global/osmo-pocket-3",
  },
  {
    Name: "DJI RS 4 Mini",
    price: "₹31,990",
    imgurl: "/media/drones/djirs4mini.png",
    explore: "https://www.dji.com/global/rs-4-mini",
  },
  {
    Name: "OSMO Action 5 Pro",
    price: "₹36,000",
    imgurl: "/media/drones/djiosmoaction5pro.png",
    explore: "https://www.dji.com/global/osmo-action-5-pro",
  },
  {
    Name: "DJI Air 3S",
    price: "₹90,000",
    imgurl: "/media/drones/djiair3s.png",
    explore: "https://www.dji.com/global/air-3s",
  },
  {
    Name: "DJI Mini 3",
    price: "₹60,999",
    imgurl: "/media/drones/djimini3.png",
    explore: "https://www.dji.com/global/mini-3",
  },
  {
    Name: "DJI Mini 4 Pro",
    price: "₹70,699",
    imgurl: "/media/drones/djimini4pro.png",
    explore: "https://www.dji.com/global/mini-4-pro",
  },
  {
    Name: "RC Pro",
    price: "₹9,999",
    imgurl: "/media/drones/djircpro.png",
    explore: "https://www.dji.com/global/rc-pro",
  },
  {
    Name: "DJI Inspire 3",
    price: "₹9,57,999",
    imgurl: "/media/drones/djiinspire3.png",
    explore: "https://www.dji.com/global/inspire-3",
  },
  {
    Name: "DJI Avata 2",
    price: "₹1,49,999",
    imgurl: "/media/drones/djiavata2.png",
    explore: "https://www.dji.com/global/avata-2",
  },

  {
    Name: "DJI Agras T50",
    price: "₹18,50,000",
    imgurl: "/media/drones/agartast50.png",
    explore: "https://ag.dji.com/t50?site=brandsite&from=homepage",
  },
  {
    Name: "DJI Dock 3",
    price: "₹8,00,000",
    imgurl: "/media/drones/djidock3.png",
    explore: "https://www.dji.com/global/dock-3",
  },
  {
    Name: "Zenmuse H30",
    price: "₹2,50,000",
    imgurl: "/media/drones/zenmuse.png",
    explore: "https://enterprise.dji.com/zenmuse-h30-series",
  },
];

function Product(props) {
  // Function to add item to cart
  if (props.highname != "") {
    console.log(props.highname);
  } else {
    console.log("Not available");
  }
  const addToCart = (drone) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists
    const existingItem = cart.find((item) => item.Name === drone.Name);

    if (existingItem) {
      // If it exists, increase quantity
      existingItem.quantity += 1;
    } else {
      // Else, add a new item with quantity 1
      cart.push({ ...drone, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${drone.Name} added to cart!`);
  };

  return (
    <div className="productclass">
      <div className="message">
        <h1>Discover Next-Gen Drones for Every Adventure!</h1>
      </div>

      <div className="productbox">
        {drones.map((drone, index) => (
          <div
            className={`container ${
              props.highname === drone.Name ? "glow" : ""
            }`}
            key={index}
          >
            <div className="card">
              <div className="imgBx">
                <img src={drone.imgurl} alt="dji drone"></img>
              </div>

              <div className="contentBx">
                <h2>{drone.Name}</h2>
                <h3>{drone.price}</h3>

                <button onClick={() => addToCart(drone)}>Add to cart</button>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={drone.explore}
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
