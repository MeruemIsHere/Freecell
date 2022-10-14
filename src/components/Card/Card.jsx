import './style/card.css'
import useCard from './useCard.hooks';
import {  memo } from 'react';
import { handleClick } from './Card.helpers';



const Card = ({index = 0, card, typeCell, indexCell, setCardSelected}) => {
  
  const { cardStyle } = useCard(typeCell, index, card)

  const dataForSelection = {
    indexCard: index, 
    card,
    typeCell,
    indexCell
  }


  return (
    <div className='card' style={cardStyle} onClick={(e) => handleClick(e, setCardSelected, dataForSelection )}>

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