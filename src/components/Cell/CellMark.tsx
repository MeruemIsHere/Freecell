import { CARD_SIZE, SYMBOLES } from '../../data/globalConstant';
import { CellMarkProps } from '../../Services/types';



export const CellMark: React.FC<CellMarkProps> = ({type, indexCell}) => {

    const valueWinCell = type === "wincell" && SYMBOLES[indexCell]

    return(
      <div className="cell-mark"  style={{width: `${CARD_SIZE.width}px`, height: `${CARD_SIZE.height}px`}}>
        {valueWinCell && <div className="symbole-mark">{valueWinCell}</div>}
      </div>
    )

  }