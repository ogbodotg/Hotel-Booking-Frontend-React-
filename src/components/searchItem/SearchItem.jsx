import './searchItem.css'

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="" className="sImg" />
      <div className="sDesc">
        <h1 className='sTitle'>High Tide Inns</h1>
        <span className='sDistance'>100m away from airport</span>
        <span className='sTaxi'>Chillax Free Taxi</span>
        <span className='sSubTitle'>Beach and Gulf Club</span>
        <span className='sFeatures'>2 bathrooms family size bed </span>
        <span className='sCancel'>Cancel booking for free</span>
        <span className='sCancelSubTitle'>You can always cancel your bookings and get 100% refunds </span>
      </div>
      <div className="sDetails">
          <div className="sRating">
            <span>Excellent</span>
            <button>5.0</button>
          </div>
          <div className="sDetailText">
            <span className='sPrice'>NGN2344</span>
            <span className='sTaxes'>Includes taxes and fees</span>
            <button className='sCheckButton'>See avaibility</button>

          </div>
        </div>

    </div>
  )
}

export default SearchItem
