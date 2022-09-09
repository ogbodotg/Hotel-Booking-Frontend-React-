import './bottom.css'

export const Bottom = () => {
  return (
      <div className='bottom'>
          <h1 className="bottomTile">
              Enjoy Africa's Freshness
          </h1>
          <span className='bottomDesc'>Register for your visit today and enjoy amzing discounts</span>
          <div className="bottomInputContainer">
              <input className='bottomInput' type="text" placeholder='Enter your email' />
              <button>Join Today</button>
        </div>
      </div>
  )
}

export default Bottom
