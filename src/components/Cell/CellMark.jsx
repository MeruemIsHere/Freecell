import { CARD_SIZE, SYMBOLES } from '../../data/globalConstant';



export const CellMark = ({type, indexCell}) => {

    const valueWinCell = type === "wincell" && SYMBOLES[indexCell]

    return(
      <div className="cell-mark"  style={{width: `${CARD_SIZE.width}px`, height: `${CARD_SIZE.height}px`}}>
        {type === "wincell" && <div className="symbole-mark">{valueWinCell}</div>}
      </div>
    )

  }