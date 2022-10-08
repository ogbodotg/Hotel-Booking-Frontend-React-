import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import { useContext } from "react";
import { SearchContext } from "../../contextAPI/SearchContext";
import { AuthContext } from "../../contextAPI/AuthContext";
import { Reserve } from "../../components/reserve/Reservation";

const Hotel = () => {
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openPage, setOpenPage] = useState(false);


  const { data, loading, error, reFetchData } = useFetch(
    `http://localhost:8000/api/hotels/get/${hotelId}`
  );


  const { dates, bookings } = useContext(SearchContext);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleSlide = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenPage(true)
    } else {
      navigate("/login")
    }
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Please hold on..."
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="closeImg"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleSlide("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data?.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleSlide("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Book a Space</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Just 2km away from Train Station
            </span>

            <span className="hotelPriceDiscount">
              Book for a stay from {data.lowCost} at {data.name} and get first
              day stay meal for free
            </span>

            <div className="hotelImages">
              {data.photos?.map((photo, index) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(index)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailText">
                <h1 className="hotelTitle"> {data.name}</h1>
                <p className="hotelDesc">{data.description}</p>
              </div>
              <div className="hotelDetailPrice">
                <h1>{days} days of amazing experience</h1>
                <span>Transcrop Hilton located in the heart of Crossriver</span>
                <h2>
                  <b>NGN{days * data.lowCost * bookings.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Book Now</button>
              </div>
            </div>
          </div>
          <Bottom />
          <Footer />
        </div>
      )}
      {openPage && <Reserve setOpenPage={setOpenPage} hotelId={hotelId} />}
    </div>
  );
};

export default Hotel;
