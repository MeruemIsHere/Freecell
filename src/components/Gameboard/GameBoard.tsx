import Cell from '../Cell'
import './style/GameBoard.css'
import { useDeck } from './useGameBoard.hooks';

const GameBoard: React.FC = () => {

    const { deck, selection, setCardClicked } = useDeck()
    
            
    return (
        <div className="gameboard-container">

            <div className="bonuscells-container">
                {deck.bonusCells.map((cards, index) => {
                            const sameIndex = selection?.cellOrigin.index === index
                            const sameTypeCell = selection?.cellOrigin.type === 'bonuscell'

                            const isSelected = sameIndex && sameTypeCell ? true :  false

                            return <Cell 
                                    key={index} 
                                    type={'bonuscell'} 
                                    cards={cards} 
                                    indexCell={index} 
                                    selection={isSelected ? selection : null} 
                                    setCardClicked={setCardClicked}
                                    />
                        }
                    )
                }
            </div>



            <div className="wincells-container">
                {deck.winCells.map((cards, index) => {
                            return <Cell 
                                    key={index} 
                                    type={'wincell'} 
                                    cards={cards} 
                                    indexCell={index} 
                                    setCardClicked={setCardClicked}
                                    />
                        }
                    )
                }
            </div>



            <div className="boardcells-container">
                {deck.boardCells.map((cards, index) => {
                            const sameIndex = selection?.cellOrigin.index === index
                            const sameTypeCell = selection?.cellOrigin.type === 'boardcell'
                            
                            const isSelected = sameIndex && sameTypeCell ? true :  false

                            return <Cell 
                                    key={index} 
                                    type={'boardcell'} 
                                    cards={cards} 
                                    indexCell={index} 
                                    selection={isSelected ? selection : null} 
                                    setCardClicked={setCardClicked}
                                    />
                        }
                    )
                }
            </div>

        </div>
    )
}

export default GameBoard