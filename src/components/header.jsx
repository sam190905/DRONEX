import React, { useState, useRef, useEffect, useContext } from "react";
import "../../public/header.css";
import heading from "../../public/media/heading.png";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/context";
// import details from "../../server";

function Header(props) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const searchContainerRef = useRef(null);
  const { user, setUser } = useUser();
  // Sample drone-related search terms
  const droneTerms = [
    "DJI Neo",
    "DJI Mavic 3 Pro",
    "DJI Flycart 30",
    "DJI Flip",
    "OSMO Pocket 3",
    "DJI RS 4 Mini",
    "OSMO Action 5 Pro",
    "DJI Air 3S",
    "DJI Mini 3",
    "DJI Mini 4 Pro",
    "RC Pro",
    "DJI Inspire 3",
    "DJI Avata 2",
    "DJI Dock 3",
    "DJI Agras T50",
    "Zenmuse H30"

  ];

  // Handle input change
  const handlesearchclick = () => {
    if (inputValue.trim() === "") return; // Prevent empty searches
  
    // Check if the entered value matches a drone term
    const matchedProduct = droneTerms.find(drone => 
      drone.toLowerCase() === inputValue.toLowerCase()
    );
  
    if (matchedProduct) {
      gotosuggestion(matchedProduct); // Highlight the product
    } else {
      alert("No matching drone found!"); // Optional: Handle case where no match is found
    }
  };
    const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length === 0) {
      setSuggestions([]);
      setIsSuggestionsVisible(false);
      return;
    }

    // Filter suggestions
    const filteredSuggestions = droneTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setIsSuggestionsVisible(filteredSuggestions.length > 0);
  };

  
function gotosuggestion(product){
  props.scroll();
  props.sethigh(product);

  setTimeout(() => {
    props.sethigh("");
  }, 5000);



}
  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setIsSuggestionsVisible(false);
    gotosuggestion(suggestion);

  };

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSuggestionsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="headerclass">
      <div className="elements">
        <div className="headingbox">
          <h1>DRONEX</h1>
        </div>
        <div className="buttondabba">
          <NavLink className="navbutton" onClick={props.gohome}>Home</NavLink>
          <NavLink className="navbutton" onClick={props.scroll}>Products</NavLink>
          <NavLink to='/About' className="navbutton">About us</NavLink>
          
          <div className="search-container" ref={searchContainerRef}>
            <input
              type="text"
              id="searchInput"
              placeholder="Search drones..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e)=>{e.key=="Enter" && handlesearchclick()}}
            />
            <button type="submit" id="searchButton" onClick={handlesearchclick}>
              <img id="searchimg" src="/media/search.png" alt="search" />
            </button>
            {isSuggestionsVisible && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink to='/cart' className="cart-contain">
            <img alt="cart" id="cart" src="/media/cart.png" />
          </NavLink>
          <div className="user">
            <img src='/media/user.png'/> {/* Add src if you have a user image */}
            
            <p>{user.name||"Guest"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;