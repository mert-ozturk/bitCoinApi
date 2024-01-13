import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
  return (
    <div>
      {props.coins.map(coins=>{
        return (
            <CoinItem coins={coins} key={coins.id}/>
        )
      })}
    </div>
  )
}

export default Coins
