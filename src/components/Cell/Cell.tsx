import './style/Cell.css'
import { defineHeightCellContainer } from './Cell.helpers'
import SelectionMarker from './SelectionMarker';
import { CellMark } from './CellMark';
import ListCards from './ListCards';
import { memo } from 'react';
import { CellProps } from '../../Services/types';



const Cell: React.FC<CellProps> = ({type, cards, indexCell, selection = null, setCardClicked}) => {
  
  return (
    <div className="cell-container" style={type === 'boardcell' ? defineHeightCellContainer(cards) : {}}>

        <CellMark type={type} indexCell={indexCell} />
        
        <div className={`cards-container`}>
          <ListCards cards={cards} typeCell={type} indexCell={indexCell} setCardClicked={setCardClicked}/>
          {selection && <SelectionMarker selection={selection}/>}
        </div>

    </div>
  )
}




export default memo(Cell)