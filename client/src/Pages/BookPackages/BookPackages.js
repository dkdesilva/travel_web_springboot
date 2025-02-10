import React from "react";
import "./BookPackages.css";
import image from "../../assets/login2.jpg"

const BookPackages = () => {
  return (
    <div className="tour-booking-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Weblink</div>
        <nav>
          <ul>
            <li>Account</li>
            <li>Newsletter</li>
            <li>Français</li>
            <li className="phone-number">1.866.WOW.DEAL</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="search-container">
          {/* Search Tabs */}
          <div className="search-tabs">
            <button className="tab active">Vacations</button>
            <button className="tab">Flights</button>
            <button className="tab">Hotels</button>
            <button className="tab">Cruises</button>
            <button className="tab">Cars</button>
          </div>

          {/* Search Form */}
          <form className="search-form">
            <select>
              <option>Toronto</option>
            </select>
            <select>
              <option>To</option>
            </select>
            <div className="input-group">
              <input type="date" />
              <select>
                <option>7 or 8 days</option>
              </select>
            </div>
            <div className="input-group">
              <select>
                <option>1 Room</option>
              </select>
              <select>
                <option>2 Guests</option>
              </select>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="all-inclusive" />
              <label htmlFor="all-inclusive">All Inclusive Only</label>
            </div>
            <button type="submit">Search</button>
          </form>

          {/* Best Price Calendar */}
          <div className="best-price-calendar">
            <span>📅 Flexible on Dates? Check out our </span>
            <strong>Best Price Calendar</strong>
          </div>
        </div>
        
        
                {/* Promo Banner */}
        <div className="promo-banner1">
          <h2>JANUARY BLOWOUT SALE</h2>
          <h3>UP TO <span>50%</span> OFF</h3>
          <img className="bookimg" src={image} alt="January Blowout Sale" />
        </div>
        {/* Promo Banner */}
        <div className="promo-banner">
          <h2>JANUARY BLOWOUT SALE</h2>
          <h3>UP TO <span>50%</span> OFF</h3>
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookPackages;
