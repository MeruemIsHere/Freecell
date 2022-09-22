import Cell from '../Cell'
import './style/GameBoard.css'
import { useDeck } from './useGameBoard.hooks';

export const GameBoard = () => {

    const {deck} = useDeck()
    
            
    return (
    <div className="gameboard-container">

        <div className="bonuscells-container">
            {deck.bonusCells.map((cards, index) => (
                <Cell key={index} type={'bonuscell'} cards={cards} indexCell={index}/>
            ))}
        </div>

        <div className="wincells-container">
            {deck.winCells.map((cards, index) => (
                <Cell key={index} type={'wincell'} cards={cards} indexCell={index}/>
            ))}
        </div>

        <div className="boardcells-container">
            {deck.boardCells.map((cards, index) => (
                <Cell key={index} type={'boardcell'} cards={cards} indexCell={index}/>
            ))}
        </div>

    </div>
    )
}

export default GameBoard