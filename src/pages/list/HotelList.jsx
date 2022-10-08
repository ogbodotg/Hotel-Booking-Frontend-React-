import "./hotelList.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/fetch";

export const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [bookings, setBookings] = useState(location.state.bookings);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetchData } = useFetch(
    `http://localhost:8000/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 500000
    }`
  );

  const handleClick = () => {
    reFetchData();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lTitle">Search</h1>
            <div className="lItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lItem">
              <label htmlFor="">Check in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lItem">
              <label htmlFor="">Options</label>
              <div className="lOptions">
                <div className="lOptionItem">
                  <span className="lOptionText">
                    Min Price <small>per 24hrs</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lOptionInput"
                  />
                </div>
                <div className="lOptionItem">
                  <span className="lOptionText">
                    Max Price <small>per 24hrs</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lOptionInput"
                  />
                </div>
                <div className="lOptionItem">
                  <span className="lOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lOptionInput"
                    placeholder={bookings.adult}
                  />
                </div>
                <div className="lOptionItem">
                  <span className="lOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lOptionInput"
                    placeholder={bookings.children}
                  />
                </div>
                <div className="lOptionItem">
                  <span className="lOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lOptionInput"
                    placeholder={bookings.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}> Search</button>
          </div>

          <div className="listResult">
            {loading ? (
              "Please hold on..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
