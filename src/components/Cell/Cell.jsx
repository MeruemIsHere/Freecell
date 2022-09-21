import './style/Cell.css'
import { CARD_SIZE } from '../../globalConstant';
import Card from '../Card';


const Cell = ({type, cards}) => {
  const cardsNotEmpty = cards?.length > 0

  return (
    <div className="cell-container">
        <div className="cell-mark"  style={{width: CARD_SIZE.width, height: CARD_SIZE.height}}></div>
        <div className={`cards-container`}>
          {cardsNotEmpty && cards.map(
            (card, index) => 
              <Card 
                key={index} 
                index={index}
                position={type}
                card={card}
              />
            )
          }
        </div>
    </div>
  )
}




export default Cell