import './style/Cell.css'
import { defineHeightCellContainer } from './Cell.helpers'
import SelectionMarker from './SelectionMarker';
import { CellMark } from './CellMark';
import ListCards from './ListCards';
import { memo } from 'react';



const Cell = ({type, cards, indexCell, selection, clickCard}) => {
  
  return (
    <div className="cell-container" style={type === 'boardcell' ? defineHeightCellContainer(cards) : {}}>

        <CellMark type={type} indexCell={indexCell} />
        
        <div className={`cards-container`}>
          <ListCards cards={cards} typeCell={type} indexCell={indexCell} clickCard={clickCard}/>
          {selection && <SelectionMarker selection={selection}/>}
        </div>

    </div>
  )
}




export default memo(Cell)