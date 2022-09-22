import './style/Cell.css'
import { CARD_SIZE, SYMBOLES } from '../../globalConstant';
import Card from '../Card';


const Cell = ({type, cards, indexCell}) => {
  const cardsNotEmpty = cards?.length > 0
  const valueWinCell = type === "wincell" && SYMBOLES[indexCell]

  return (
    <div className="cell-container">

        <div className="cell-mark"  style={{width: CARD_SIZE.width, height: CARD_SIZE.height}}>
          {type === "wincell" && <div className="symbole-mark">{valueWinCell}</div>}
        </div>

        <div className={`cards-container`}>
          {cardsNotEmpty && cards.map(
            (card, index) => 
              <Card 
                key={index} 
                index={index}
                typeCell={type}
                card={card}
              />
            )
          }
        </div>
        
    </div>
  )
}




export default Cell