import React from 'react'

const CoinItem = (props) => {
  return (
    <div>
        <div> 
        <p>{props.coins.market_cap_rank}</p>
        <p>{props.coins.market_cap.toLocaleString()}</p>
        <img src={props.coins.image} />
        <p>{props.coins.ath_date}</p>
        <p>{props.coins.current_price.toLocaleString()}$</p>
        </div>
    </div>
  )
}

export default CoinItem
