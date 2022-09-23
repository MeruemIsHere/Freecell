import { CARD_SIZE, GAP_CARDS_INTO_BOARDCELL } from './../../globalConstant';


export function defineHeightCellContainer(cards) {
    const numberOfCards = cards.length - 1
    const heightCardsContainer = CARD_SIZE.height + (GAP_CARDS_INTO_BOARDCELL * numberOfCards)

    return { height: `${heightCardsContainer}px` }
}