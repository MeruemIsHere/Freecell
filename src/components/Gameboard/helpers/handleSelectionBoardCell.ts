import { Card, CardClicked, Selection } from "../../../Services/types";
import authorizationSelection from './authorizationSelection';

export default function handleSelectionBoardCell(cardClicked: CardClicked, cards: Card[]): Selection | null {
    const { indexCard, card, typeCell, indexCell } = cardClicked
    
    if(!cards.length) return null

    let copyCellCards = [...cards]
    let nbCardsSelected = cards.length - indexCard

    //FIXME: Replace copyCellCards by [...cards]
    let cardsSelected = copyCellCards.splice(indexCard, nbCardsSelected)

    let newSelection = {
        cards: cardsSelected,
        cellOrigin: {
            type: typeCell,
            index: indexCell
        }
    }

    const isAuthorize = authorizationSelection(cardsSelected)

    return isAuthorize ? newSelection : null
}