import './style/card.css'
import useCard from './useCard.hooks';
import { ShiftingCardsContext } from './../../context/GlobalContext/ShiftingCardsContext/ShiftingCardsContext';
import { useContext } from 'react';



function Card({index = 0, card, typeCell, indexCell}) {
  
  const { cardStyle } = useCard(typeCell, index, card)
  const { handleClickCard } = useContext(ShiftingCardsContext)

  const dataForSelection = {
    indexCard: index, 
    card,
    typeCell,
    indexCell
  }

  return (
    <div className='card' style={cardStyle} onClick={() => handleClickCard(dataForSelection)}>

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

export default Card