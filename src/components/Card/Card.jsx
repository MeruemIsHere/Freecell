import './style/card.css'
import { CARD_SIZE } from '../../globalConstant'
import { displayColor } from './Card.helpers';
import useCard from './useCard.hooks';



function Card({index = 0, typeCell, card}) {
  const { cardStyle } = useCard(typeCell, index, card)

  return (
    <div className='card' style={cardStyle}>

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