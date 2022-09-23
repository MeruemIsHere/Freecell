import './style/card.css'
import useCard from './useCard.hooks';



function Card({index = 0, typeCell, card, handleClickCard}) {
  
  const { cardStyle } = useCard(typeCell, index, card)

  return (
    <div className='card' style={cardStyle} onClick={() => handleClickCard({index, card, typeCell})}>

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