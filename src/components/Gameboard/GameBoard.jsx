import GlobalContext from '../../context/GlobalContext';
import Cell from '../Cell'
import './style/GameBoard.css'
import { useDeck } from './useGameBoard.hooks';
import { useShiftingCards } from './../../context/GlobalContext/ShiftingCardsContext/Value';

export const GameBoard = () => {

    const {deck} = useDeck()
    
            
    return (
        <GlobalContext valueShiftingCards={useShiftingCards(deck)}>
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
        </GlobalContext>
    )
}

export default GameBoard