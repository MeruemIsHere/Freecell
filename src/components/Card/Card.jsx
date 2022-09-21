import './style/card.css'
import { CARD_SIZE } from '../../globalConstant'
import { displayColor } from './Card.helpers';
import useCard from './useCard.hooks';



function Card({index = 0, position, card}) {
  const { topPos } = useCard(position, index)

  return (
    <div className='card' 
         style={{
            width: CARD_SIZE.width, 
            height: CARD_SIZE.height, 
            color: displayColor(card.symbole),
            top: `${topPos}px`
         }}>

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