import { CardClicked, Deck, Selection, SetSelection } from "../../../Services/types"
import handleDistribution from "./handleDistribution"
import handleSelection from "./handleSelection"


export type HandleClickCardParams = {
    deck: Deck,
    cardClicked: CardClicked,
    selection: Selection | null,
    setSelection: SetSelection
}


export default function handleClickCard(params: HandleClickCardParams) {
    const { deck, cardClicked, selection, setSelection } = params
    const { indexCard, card, typeCell, indexCell } = cardClicked

    if (!selection) {
        handleSelection(cardClicked, deck, setSelection)

    } else {
        let cellSelectionOrigin = selection.cellOrigin
        let sameCellClicked = (typeCell === cellSelectionOrigin.type) && (indexCell === cellSelectionOrigin.index)

        if (sameCellClicked) {
            handleSelection(cardClicked, deck, setSelection)

        } else {
            handleDistribution()

        }
    }
}