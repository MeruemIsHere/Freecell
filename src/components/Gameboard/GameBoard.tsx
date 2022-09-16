import Cell from '../Cell'
import './style/GameBoard.css'
import cards from '../../Data/cards.json'
import Card from './../Card/Card';

function GameBoard() {
    
    return (
    <div className="gameboard-container">
        <div className="bonuscells-container">
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>

        <div className="wincells-container">
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>

        <div className="boardcells-container">
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>
    </div>
    )
}

export default GameBoard