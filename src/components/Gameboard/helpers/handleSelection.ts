import { CardClicked, Deck, SetSelection } from "../../../Services/types"
import handleSelectionBoardCell from "./handleSelectionBoardCell"

export default function handleSelection(cardClicked: CardClicked, deck: Deck, setSelection: SetSelection): void {
    const { indexCard, card, typeCell, indexCell } = cardClicked
    let newSelection
    
    switch (typeCell) {
        case "wincell":
            break

        case "bonuscell":
            newSelection = {
                cards: [cardClicked.card],
                cellOrigin: {
                    type: typeCell,
                    index: indexCell
                }
            }
            setSelection(newSelection)
            
            break

        case "boardcell":
            newSelection = handleSelectionBoardCell(cardClicked, deck.boardCells[indexCell])
            setSelection(newSelection)
            break

        default:
            break
    }
}