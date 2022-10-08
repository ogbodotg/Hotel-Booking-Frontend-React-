import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../contextAPI/SearchContext'
import useFetch from '../../hooks/fetch'
import './reserve.css'

export const Reserve = ({ setOpenPage, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([])
  const {data, loading, error} = useFetch(`http://localhost:8000/api/hotels/rooms/${hotelId}`)
  const { dates } = useContext(SearchContext)

  const getDatesRange = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const date = new Date(start.getTime());

    const dateList = [];

    while (date <= end) {
      dateList.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);

    }
    return dateList;
  };

  const allDates = getDatesRange(dates[0].startDate, dates[0].endDate);
  const isAvailable = (roomNumber) => {
    const result = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !result;
  }
  
  const handleSelect = (e) => {
    const checked = e.target.checked
    const value = e.target.value
    setSelectedRooms(checked ? [...selectedRooms, value]: selectedRooms.filter((item)=> item!==value))
  
  }

  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      await Promise.all(selectedRooms.map(roomId => {
        
        const res = axios.put(`http://localhost:8000/api/rooms/availability/${roomId}`, { dates: allDates });
        return 'res.data';
      }));
      setOpenPage(false)
      navigate("/")
    } catch (error) {
      
    }
    
  }
  
  return (
    <div className='reserve'>
      <div className="reservationContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpenPage(false)} />
        <span>Select rooms</span>
        {data.map((item) => (
          <div className="reservationItem">
            <div className="reservationInfo">
              <div className="title">{item.title}</div>
              <div className="description">{item.roomDescription}</div>
              <div className="maximumPeople">Maximum People: <b>{item.maxPeople}</b></div>
              <div className="price"><b>{item.price}</b></div>

            </div>
            <div className="selectRoom">
            {item.roomNumbers.map(roomNumber => (

            <div className="room">
                <label>{roomNumber.number}</label>
                <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
            </div>
            ))}
            </div>    
          </div>
        ))}
        <button onClick={handleClick} className='reservationBtn'>Make Reservation</button>
      </div>
    </div>
  )
}

export default Reserve;