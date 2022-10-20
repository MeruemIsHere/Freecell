import './style/card.css'
import useCard from './useCard.hooks';
import {  memo } from 'react';
import { handleCardClick } from './Card.helpers';
import { CardProps } from '../../Services/types';



const Card: React.FC<CardProps> = ({index = 0, card, typeCell, indexCell, setCardClicked}) => {
  
  const { cardStyle } = useCard(typeCell, index, card)

  const dataForSelection = {
    indexCard: index, 
    card,
    typeCell,
    indexCell
  }


  return (
    <div className='card' style={cardStyle} onClick={(e) => handleCardClick(e, setCardClicked, dataForSelection )}>

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