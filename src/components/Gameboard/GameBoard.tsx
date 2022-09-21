import { BonusCell, WinCell, BoardCell } from '../Cell'
import './style/GameBoard.css'
import cards from '../../Data/cards.json'

function GameBoard() {
            
    return (
    <div className="gameboard-container">
        <div className="bonuscells-container">
            <BonusCell/>
            <BonusCell/>
            <BonusCell/>
            <BonusCell/>
        </div>

        <div className="wincells-container">
            <WinCell/>
            <WinCell/>
            <WinCell/>
            <WinCell/>
        </div>

        <div className="boardcells-container">
            <BoardCell/>
            <BoardCell/>
            <BoardCell/>
            <BoardCell/>
            <BoardCell/>
            <BoardCell/>
            <BoardCell/>
            <BoardCell/>
        </div>
    </div>
    )
}

export default GameBoard