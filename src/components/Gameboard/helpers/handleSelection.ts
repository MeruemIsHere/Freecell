import { CardClicked, Deck, SetSelection } from "../../../Services/types"
import handleSelectionBoardCell from "./handleSelectionBoardCell"

export default function handleSelection(cardClicked: CardClicked, deck: Deck, setSelection: SetSelection): void {
    const { indexCard, card, typeCell, indexCell } = cardClicked

    switch (typeCell) {
        case "wincell":
            break

        case "bonuscell":
            let newSelection = {
                cards: [cardClicked.card],
                cellOrigin: {
                    type: typeCell,
                    index: indexCell
                }
            }
            setSelection(newSelection)
            break

        case "boardcell":
            setSelection(handleSelectionBoardCell(cardClicked, deck.boardCells[indexCell]))
            break

        default:
            break
    }
}