import "./searchItem.css";
import { Link } from "react-router-dom";

export const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="sImg" />
      <div className="sDesc">
        <h1 className="sTitle">{item.name}</h1>
        <span className="sDistance">100m away from airport</span>
        <span className="sTaxi">Chillax Free Taxi</span>
        <span className="sSubTitle">Beach and Gulf Club</span>
        <span className="sFeatures">2 bathrooms family size bed </span>
        <span className="sCancel">Cancel booking for free</span>
        <span className="sCancelSubTitle">
          You can always cancel your bookings and get 100% refunds{" "}
        </span>
      </div>
      <div className="sDetails">
        {item.rating && (
          <div className="sRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="sDetailText">
          <span className="sPrice">NGN {item.lowCost}</span>
          <span className="sTaxes">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="sCheckButton">See avaibility</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
