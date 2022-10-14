import Cell from '../Cell'
import './style/GameBoard.css'
import { useDeck } from './useGameBoard.hooks';

export const GameBoard = () => {

    const { deck, selection, setCardSelected } = useDeck()
    
            
    return (
        <div className="gameboard-container">

            <div className="bonuscells-container">
                {deck.bonusCells.map((cards, index) => {
                            const isSelected = (selection?.cellOrigin.index === index) && selection?.cellOrigin.type === 'bonuscell' ? true :  false
                            return <Cell key={index} type={'bonuscell'} cards={cards} indexCell={index} selection={isSelected ? selection : null} setCardSelected={setCardSelected}/>
                        }
                    )
                }
            </div>

            <div className="wincells-container">
                {deck.winCells.map((cards, index) => {
                            return <Cell key={index} type={'wincell'} cards={cards} indexCell={index} clickCard={setCardSelected}/>
                        }
                    )
                }
            </div>

            <div className="boardcells-container">
                {deck.boardCells.map((cards, index) => {
                            const isSelected = (selection?.cellOrigin.index === index) && selection?.cellOrigin.type === 'boardcell' ? true :  false
                            return <Cell key={index} type={'boardcell'} cards={cards} indexCell={index}  selection={isSelected ? selection : null} setCardSelected={setCardSelected}/>
                        }
                    )
                }
            </div>

        </div>
    )
}

export default GameBoard