import useFetch from "../../hooks/fetch"
import "./properties.css"

export const Properties = () => {
    const { data, loading, error } = useFetch("http://localhost:8000/api/hotels/countByType?types=Resort,Hotel,Apartment,Game Reserve");
    const images = [
        "https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
        "https://africa-facts.org/wp-content/uploads/2018/10/0000-1024x683.jpg",
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
    ]; 
    return (
      <div className="propertiesList">
            {loading ? ("Please hold on...") : ( <> {data && images.map((img, i) => (
              <div className="propertyItem" key={i}>
              <img src={img} alt="" className="propertyImg"/>
              <div className="propertyTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
              </div>
          </div>
          )) }
         
        </>)}
    </div>
  )
}

export default Properties