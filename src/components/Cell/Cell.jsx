import './style/Cell.css'
import { defineHeightCellContainer } from './Cell.helpers'
import SelectionMarker from './SelectionMarker';
import { CellMark } from './CellMark';
import ListCards from './ListCards';
import { useContext } from 'react';
import { ShiftingCardsContext } from './../../context/GlobalContext/ShiftingCardsContext';



const Cell = ({type, cards, indexCell}) => {

  const { selection } = useContext(ShiftingCardsContext)
  
  const isSelected = selection?.cellOrigin.type === type && selection?.cellOrigin.index === indexCell

  // isSelected && console.log(selection)


  return (
    <div className="cell-container" style={type === 'boardcell' ? defineHeightCellContainer(cards) : {}}>

        <CellMark type={type} indexCell={indexCell} />
        
        <div className={`cards-container`}>

          <ListCards cards={cards} typeCell={type} indexCell={indexCell} />
          {isSelected && <SelectionMarker selection={selection}/>}

        </div>

        
    </div>
  )
}




export default Cell