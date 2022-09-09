import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faSearch, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    
    const [bookingOptions, setBookingOptions] = useState(false);
    const [bookings, setBookings] = useState({
        adult: 1, 
        children: 0,
        room: 1,
    })

    const navigate = useNavigate()

    const handleBooking = (name, operation) => {
        setBookings(prev => {
            return {
            ...prev, [name]: operation ==="i"?bookings[name]+1 : bookings[name]-1,
        }})
        
    }

    const handleSearch = () => {
        navigate("/hotels", {
            state: {
            destination, date, bookings
        }} )
    }

  return (
      <div className='header'>
          <div className={type === "list" ? "headerContainer":"headerContainer home"}>
          <div className="headerList">
              <div className="headerListItem active">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>    
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>    
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car rentals</span>    
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport taxis</span>    
              </div>
              </div>
              {type !== "list" &&
                  <><h1 className="headerTitle">Enjoy Africa... </h1>
              <p className="headerDesc">
                  Experience Africa's green, nice, fresh environment. Create a free account to unlock huge discounts 
              </p>
              <button className='headerBtn'>Sign in / Register</button>
              <div className="headerSearch">
                  <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                      <input type="text" placeholder="Where would you like to experience?"
                              className='headerSearchInput'  
                              onChange={(e)=> setDestination(e.target.value)}
                      />  
                  </div>
                  <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
                      <span onClick={()=>setOpenDate(!openDate)} className='"headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                      {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                              className="date"
                              minDate={ Date()}
                        />}
                  </div>
                  <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faPerson} className="searchIcon" />
                        <span onClick={()=>setBookingOptions(!bookingOptions)} className='headerSearchItem'>{`${bookings.adult} adult - ${bookings.children} children - ${bookings.room} room`}</span>
                      {bookingOptions && <div className="bookings">
                          <div className="bookingItem">
                              <span className="bookingText">Adult</span>
                              <div className="bookingCounter">
                                  
                              <button disabled={bookings.adult<=1} className='bookingCounterButton' onClick={()=>handleBooking("adult", "d")}>-</button> 
                                  <span className="bookingCounterNumber">{ bookings.adult}</span>
                              <button className='bookingCounterButton' onClick={()=>handleBooking("adult", "i")}>+</button> 
                              </div>

                          </div>
                          <div className="bookingItem">
                              <span className="bookingText">Children</span>
                              <div className="bookingCounter">

                              <button disabled={bookings.children<=0} className='bookingCounterButton'onClick={()=>handleBooking("children", "d")}>-</button> 
                              <span className="bookingCounterNumber">{ bookings.children}</span>
                                  <button className='bookingCounterButton' onClick={()=>handleBooking("children", "i")}>+</button> 
                                  </div>

                          </div>
                          <div className="bookingItem">
                              <span className="bookingText">Room</span>
                              <div className="bookingCounter">

                              <button disabled={bookings.room<=1} className='bookingCounterButton' onClick={()=>handleBooking("room", "d")}>-</button> 
                              <span className="bookingCounterNumber">{ bookings.room}</span>
                                  <button className='bookingCounterButton' onClick={()=>handleBooking("room", "i")}>+</button> 
                                  </div>

                          </div>
                        </div>}
                  </div>
                  <div className="headerSearchItem">
                    <button className="searchBtn" onClick={handleSearch}>Search</button>
                  </div>
              </div></>}
          </div>
        </div>
  )
}

export default Header
