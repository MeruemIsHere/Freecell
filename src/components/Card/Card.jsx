import './style/card.css'
import { CARD_SIZE } from '../../globalConstant'
import { displayColor } from './Card.helpers';

function Card({card}) {

  return (
    <div className='card' style={{width: CARD_SIZE.width, height: CARD_SIZE.height, color: displayColor(card.symbole)}}>
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