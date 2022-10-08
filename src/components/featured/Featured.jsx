import useFetch from '../../hooks/fetch';
import './featured.css';

export const Featured = () => {
    const { data, loading, error } = useFetch("http://localhost:8000/api/hotels/countByCity?cities=Abuja,Bauchi,Enugu")
    return (
      <div className="featured">
         { loading ? ("Please hold on...") : (<> <div className="featuredItem">
              <img src="https://i0.wp.com/lifeinarewa.com.ng/wp-content/uploads/2020/05/img_20200519_0557038759846151438564025.jpg?w=640" alt="featuredImage" className='featuredImg'/>
              <div className="featuredTitles">
                  <h1>Bauchi</h1>
                  <h2>{data[0]} Experience Yankari</h2>

              </div>
          </div>
          <div className="featuredItem">
              <img src="https://guardian.ng/wp-content/uploads/2016/04/Obudu-Cattle-Ranch-1.jpg" alt="featuredImage" className='featuredImg'/>
              <div className="featuredTitles">
                  <h1>Obudu Ranch</h1>
                  <h2>{data[1]} Experience Obudu</h2>

              </div>
          </div>
          <div className="featuredItem">
              <img src="https://guardian.ng/wp-content/uploads/2016/04/Obudu-Cattle-Ranch.jpg" alt="featuredImage" className='featuredImg'/>
              <div className="featuredTitles">
                  <h1>Nike Lake</h1>
                  <h2>{data[2]} Experience Nike</h2>

              </div>
          </div></>)}
    </div>
  )
}

export default Featured