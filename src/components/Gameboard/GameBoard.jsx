import Cell from '../Cell'
import './style/GameBoard.css'
import { useDeck } from './useGameBoard.hooks';

export const GameBoard = () => {

    const {deck} = useDeck()
    
            
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
            {deck.map((cards, index) => <Cell key={index} type={'boardcell'} cards={cards}/>)}
        </div>
    </div>
    )
}

export default GameBoard