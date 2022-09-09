import './hotelList.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'


export const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  const [bookings, setBookings] = useState(location.state.bookings);



  return (
    <div><Navbar /><Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lTitle'>Search</h1>
            <div className="lItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div className="lItem">
              <label htmlFor="">Check in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate&&(<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={ date} />)}
            </div>
            <div className="lItem">
              <label htmlFor="">Options</label>
              <div className="lOptions">
              <div className="lOptionItem">
                <span className="lOptionText">Min Price <small>per 24hrs</small></span>
                <input type="number" className="lOptionInput" />
              </div>
              <div className="lOptionItem">
                <span className="lOptionText">Max Price <small>per 24hrs</small></span>
                <input type="number" className="lOptionInput" />
              </div>
              <div className="lOptionItem">
                <span className="lOptionText">Adult</span>
                <input type="number" min={1} className="lOptionInput" placeholder={bookings.adult } />
              </div>
              <div className="lOptionItem">
                <span className="lOptionText">Children</span>
                <input type="number" min={0} className="lOptionInput" placeholder={bookings.children }/>
              </div>
              <div className="lOptionItem">
                <span className="lOptionText">Room</span>
                <input type="number" min={1} className="lOptionInput" placeholder={bookings.room }/>
              </div>
            </div>
            </div>
            <button>Search</button>
            </div>

          <div className="listResult">
            <SearchItem />
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
            
</div>
        </div>
      </div>
    </div>
  )
}

export default Hotels