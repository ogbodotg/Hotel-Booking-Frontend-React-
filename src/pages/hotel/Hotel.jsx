import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Bottom from '../../components/bottom/Bottom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
       src:"https://i2.wp.com/www.momoafrica.com/wp-content/uploads/2017/05/Giraffe-Manor.jpg?fit=900%2C600&ssl=1"
    },
    {
      src:"https://cdn.pmnewsnigeria.com/2020/08/Obudu-Ranch-Resort-good-for-honey-mooners-.jpg"
    },
    {
      src:"https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg"
    },
    {
      src:"https://i2.wp.com/www.momoafrica.com/wp-content/uploads/2017/05/Giraffe-Manor.jpg?fit=900%2C600&ssl=1"
    },
    {
      src:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg"
    },
    {
      src:"https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
    }
  ]
  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);

  }

  const handleSlide = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber===0?5:slideNumber-1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="closeImg" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleSlide('l')}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleSlide('r')} />
          
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Book a Space</button>
          <h1 className="hotelTitle">
            Transcrop Hilton
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 Obudu Cattle Street</span>
          </div>
          <span className='hotelDistance'>Just 120m away from Train Station</span>

          <span className='hotelPriceDiscount'>Book for a stay and get first day stay meal for free</span>
          
            <div className="hotelImages">
              {photos.map((photo, index) => (
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className='hotelImg'/>
                  </div>
                ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailText">
                <h1 className="hotelTitle"> Transcorp Hilton</h1>
                  <p className='hotelDesc'>
                  Here are the latest jobs we’ve selected just for you. If you’re interested, apply now!
                  Here are the latest jobs we’ve selected just for you. If you’re interested, apply now!
                  Here are the latest jobs we’ve selected just for you. If you’re interested, apply now!
                  Here are the latest jobs we’ve selected just for you. If you’re interested, apply now!
                  Here are the latest jobs we’ve selected just for you. If you’re interested, apply now!
                  </p>
              </div>
              <div className="hotelDetailPrice">
                <h1>7 days stay, get 3 days free</h1>
                <span>Transcrop Hilton located in the heart of Crossriver</span>
                <h2>
                  <b>NGN89000</b> (7 nights)
                </h2>
                <button>Book Now</button>
              </div>
            </div>
        </div>
        <Bottom />
        <Footer/>
      </div>
    </div>

  )
}

export default Hotel