import { Card, CardClicked, Selection } from "../../../Services/types";
import authorizationSelection from './authorizationSelection';

export default function handleSelectionBoardCell(cardClicked: CardClicked, cards: Card[]): Selection | null {
    const { indexCard, card, typeCell, indexCell } = cardClicked

    let nbCardsSelected = cards.length - indexCard
    let cardsSelected = [...cards].splice(indexCard, nbCardsSelected)

    let newSelection: Selection = {
        cards: cardsSelected,
        cellOrigin: {
            type: typeCell,
            index: indexCell
        }
    }

    const isAuthorize = authorizationSelection(cardsSelected)

    return isAuthorize ? newSelection : null
}