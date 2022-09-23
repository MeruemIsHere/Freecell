import './style/Cell.css'
import { CARD_SIZE, SYMBOLES } from '../../globalConstant';
import Card from '../Card';
import { useState } from 'react';
import { defineHeightCellContainer, handleSelectionBoardCell } from './Cell.helpers'
import SelectionMarker from './SelectionMarker';


const Cell = ({type, cards, indexCell}) => {

  const cellNotEmpty = cards.length > 0
  const valueWinCell = type === "wincell" && SYMBOLES[indexCell]

  const [selection, setSelection] = useState(null)



  const handleClickCard = (cardSelected) => {
    if(!selection) {
      switch (type) {
        case "wincell":
          break

        case "bonuscell":
          setSelection(cardSelected)
          break

        case "boardcell":
          setSelection( handleSelectionBoardCell(cardSelected, cards) )
          break

        default:
          break
      }

    } else {
      // let clickOnSame
      console.log("distribution");
    }
  }



  return (
    <div className="cell-container" style={type === 'boardcell' ? defineHeightCellContainer(cards) : {}}>

        <div className="cell-mark"  style={{width: `${CARD_SIZE.width}px`, height: `${CARD_SIZE.height}px`}}>
          {type === "wincell" && <div className="symbole-mark">{valueWinCell}</div>}
        </div>

        <div className={`cards-container`}>
          {cellNotEmpty && cards.map(
            (card, index) => 
              <Card 
                key={index} 
                index={index}
                typeCell={type}
                card={card}
                handleClickCard={handleClickCard}
              />
            )
          }
          {selection && <SelectionMarker selection={selection}/>}
          
        </div>

        
    </div>
  )
}




export default Cell