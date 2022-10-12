import './style/card.css'
import useCard from './useCard.hooks';
import {  memo } from 'react';



const Card = ({index = 0, card, typeCell, indexCell, clickCard}) => {
  
  const { cardStyle } = useCard(typeCell, index, card)

  const dataForSelection = {
    indexCard: index, 
    card,
    typeCell,
    indexCell
  }

  const handleClick = (e) => {
    e.preventDefault()    

    clickCard((prevCard) => {
      const sameCard = (prevCard?.card?.value === card.value) && (prevCard?.card.symbole === card.symbole) ? true : false

      if(sameCard) {
        return {}
      } else {
        return dataForSelection
      }
    })
  }

  return (
    <div className='card' style={cardStyle} onClick={handleClick}>

      <div className="top">
        {card.designation}
        {card.symbole}
      </div>

      <div className="content">
        {card.designation}
        {card.symbole}
      </div>
      
      <div className="bottom">
        {card.designation}
        {card.symbole}
      </div>

    </div>
  )
}

export default memo(Card)