import './style/Cell.css'
import { CARD_SIZE } from './../../globalConstant';

function Cell() {
  return (
    <div className="cell-container">
        <div className="cell-mark"  style={{width: CARD_SIZE.width, height: CARD_SIZE.height}}></div>
    </div>
  )
}

export default Cell